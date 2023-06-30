import { z } from "zod";

export const commentSchema = z.object({
  description: z.string(),
});

export type CommentSchema = z.infer<typeof commentSchema>;
