import { z } from "zod";

export const PromptSchema = z.object({
  prompt: z.string().min(10, {message: "O prompt deve ter no mínimo 10 caractéres"}).max(200, {message: "O prompt deve ter no máximo 200 caractéres"})
})
export type PromptSchemaType = z.infer<typeof PromptSchema>