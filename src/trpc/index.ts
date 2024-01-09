import { trainerRouter } from './router/trainerRouter';
import { router } from './trpc';

export const appRouter = router({
  trainer: trainerRouter,
});

export type AppRouter = typeof appRouter;
