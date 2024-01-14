import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/db';
import { ExerciseValidator } from '@/lib/validation/exercise-validation';

export const exerciseRouter = router({
  addExercise: publicProcedure
    .input(ExerciseValidator)
    .mutation(async ({ input }) => {
      const { name, category } = input;

      await db.exercise.create({
        data: {
          name,
          category,
        },
      });

      return { success: true };
    }),

  getAllExercises: publicProcedure.query(async () => {
    const response = await db.exercise.findMany();
    return { success: true, response };
  }),

  deleteExcercise: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const { id } = input;

      await db.exercise.delete({
        where: {
          id,
        },
      });

      return { success: true };
    }),
});
