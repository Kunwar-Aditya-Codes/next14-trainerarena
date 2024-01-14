import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { router, privateProcedure, publicProcedure } from '../trpc';
import { ClientValidator } from '@/lib/validation/client-validation';
import { db } from '@/db';
import { auth } from '@clerk/nextjs';

export const trainerRouter = router({
  createClient: privateProcedure
    .input(ClientValidator)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      if (!userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }

      const { email, height, username, weight } = input;

      const duplicateEmail = await db.client.findFirst({
        where: {
          email,
        },
      });

      if (duplicateEmail) {
        throw new TRPCError({ code: 'CONFLICT' });
      }

      await db.client.create({
        data: {
          email,
          height,
          username,
          weight,
          trainerId: userId,
        },
      });

      return { success: true };
    }),

  getAllClients: publicProcedure.query(async () => {
    const { userId: trainerId } = auth();

    if (!trainerId) {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: 'No trainer id found!',
      });
    }

    const allClients = await db.client.findMany({
      where: {
        trainerId,
      },
    });

    return { success: true, allClients };
  }),

  getClientById: publicProcedure
    .input(z.object({ clientId: z.string() }))
    .query(async ({ input }) => {
      const { clientId } = input;

      const foundClient = await db.client.findFirst({
        where: {
          id: clientId,
        },
      });

      if (!foundClient) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }

      return { success: true, foundClient };
    }),

  deleteClient: privateProcedure
    .input(z.object({ clientId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.userId;

      if (!userId) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }

      const { clientId } = input;

      await db.client.delete({
        where: {
          id: clientId,
        },
      });

      return { success: true };
    }),
});
