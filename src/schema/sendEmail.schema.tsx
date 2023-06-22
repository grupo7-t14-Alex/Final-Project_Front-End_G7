import { z } from "zod";

export const sendEmailSchema = z.object({
  email: z.string().email("digite um email valido"),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Mínimo de 8 caracteres" })
      .max(20, { message: "Máximo de 20 caracteres" })
      .regex(/^(?=.*[!@#$%^&*])/, {
        message:
          "A senha deve conter pelo menos um caractere especial: !@#$%^&*",
      }),

    confirmPass: z.string(),
  })
  .refine((data) => data.password === data.confirmPass, {
    message: "As senhas devem ser iguais",
    path: ["confirmPass"],
  });

export type SendEmailData = z.infer<typeof sendEmailSchema>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
