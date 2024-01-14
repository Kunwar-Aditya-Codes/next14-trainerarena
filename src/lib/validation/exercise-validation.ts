import { z } from 'zod';

export const ExerciseValidator = z.object({
  name: z.string().min(1),
  category: z.string(),
});

export type TExerciseValidator = z.infer<typeof ExerciseValidator>;
