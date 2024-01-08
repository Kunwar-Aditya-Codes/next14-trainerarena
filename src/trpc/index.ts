import { publicProcedure, router } from './trpc';

export const appRouter = router({
  getUser: publicProcedure.query(() => {
    return 'hello';
  }),
});

export type AppRouter = typeof appRouter;
