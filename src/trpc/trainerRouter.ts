import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { router, publicProcedure } from './trpc';

export const trainerRouter = router({
  test: publicProcedure.query(() => {
    return 3;
  }),
});
