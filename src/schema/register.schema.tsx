import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().email({ message: 'O e-mail inserido é inválido' }),
    email: z.string().min(8, { message: 'A senha deve ter no mínimo 6 caracteres' }),
    phone: z.string().min(8, { message: 'Digite um telefone valido' }),
    cpf: z.string(),
    birthDate: z.string(),
    description: z.string(),
    cep: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.number(),
    complement: z.string(),
    password: z.string(),
    confirmPass: z.string(),
});

export type registerSchema = z.infer<typeof registerSchema>