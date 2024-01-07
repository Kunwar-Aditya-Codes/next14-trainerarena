import { z } from 'zod';

export const ClientValidator = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  height: z
    .number()
    .min(0, { message: 'Height must be a non-negative number' }),
  weight: z
    .number()
    .min(0, { message: 'Weight must be a non-negative number' }),
});

export type TClientValidator = z.infer<typeof ClientValidator>;
