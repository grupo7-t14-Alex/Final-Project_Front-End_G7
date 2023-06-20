import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    email: z.string().email('digite um email valido'),
    cpf: z.string().min(11, 'digite seu CPF(digite 11 numeros)').max(11, 'digite seu CPF (apenas 11 numeros)'),
    phone: z.string().min(11, 'digite seu Celular com DDD').max(11, 'digite seu Celular com DDD'),
    birthDate: z.string().min(8, 'sua data de nacimento (apenas numeros)').max(8, 'sua data de nacimento (apenas numeros)'),
    description: z.string().optional(),
    seller: z.boolean().default(false),

    cep: z.string().min(5, 'Digite o seu CEP (apenas numeros)').max(11, 'Digite o seu CEP (apenas numeros)'),
    state: z.string().min(2, 'estado invalido, EX: SP').max(2, 'digite apenas 2 caracteres, EX: SP'),
    city: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    street: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    number: z.string().min(2, 'digite u numero valido'),
    complement: z.string().optional(),

    password: z.string()
        .min(8, { message: 'Mínimo de 8 caracteres' })
        .max(20, { message: 'Máximo de 20 caracteres' })
        .regex(/^(?=.*[!@#$%^&*])/, { message: 'A senha deve conter pelo menos um caractere especial: !@#$%^&*' }),

    confirmPass: z.string(),
}).refine((data) => data.password === data.confirmPass, { message: 'As senhas devem ser iguais', path: ['confirmPass'] });


export const schema = z.object({
    name: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    email: z.string().email('digite um email valido'),
    cpf: z.string().min(11, 'digite seu CPF(digite 11 numeros)').max(11, 'digite seu CPF (apenas 11 numeros)'),
    phone: z.string().min(11, 'digite seu Celular com DDD').max(11, 'digite seu Celular com DDD'),
    birthDate: z.string().min(8, 'sua data de nacimento (apenas numeros)').max(8, 'sua data de nacimento (apenas numeros)'),
    description: z.string().optional(),
    seller: z.boolean().default(false),
    password: z.string()
        .min(8, { message: 'Mínimo de 8 caracteres' })
        .max(20, { message: 'Máximo de 20 caracteres' })
        .regex(/^(?=.*[!@#$%^&*])/, { message: 'A senha deve conter pelo menos um caractere especial: !@#$%^&*' }).optional(),

    confirmPass: z.string().optional(),
}).refine((data) => data.password === data.confirmPass, { message: 'As senhas devem ser iguais', path: ['confirmPass'] });

export const schemaAddress = z.object({
    cep: z.string().min(5, 'Digite o seu CEP (apenas numeros)').max(11, 'Digite o seu CEP (apenas numeros)'),
    state: z.string().min(2, 'estado invalido, EX: SP').max(2, 'digite apenas 2 caracteres, EX: SP'),
    city: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    street: z.string().min(3, 'minimo 3 caracteres').max(40, 'maximo 40 caracteres'),
    number: z.string().min(2, 'digite u numero valido'),
    complement: z.string().optional(),
})

export type updateUserAddressSchemaType = z.infer<typeof schemaAddress>
export type updateUserSchemaType = z.infer<typeof schema>
export type registerSchemaType = z.infer<typeof registerSchema>