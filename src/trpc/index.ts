import { exerciseRouter } from './router/exerciseRouter';
import { trainerRouter } from './router/trainerRouter';
import { router } from './trpc';

export const appRouter = router({
  trainer: trainerRouter,
  exercise: exerciseRouter,
});

export type AppRouter = typeof appRouter;
