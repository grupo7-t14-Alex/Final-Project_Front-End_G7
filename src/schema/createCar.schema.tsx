import { z } from "zod";

export enum Fuel {
    diesel = "Diesel",
    ethanol = "Etanol",
    gasoline = "Gasolina",
    flex = "Flex",
}

export const createCarSchema = z
    .object({
        brand: z.string().min(1, "Campo obrigatório"),
        year: z.string().min(1, "Campo obrigatório").or(z.number()),
        color: z.string().min(1, "Campo obrigatório"),
        milage: z.string().min(1, "Campo obrigatório").or(z.number()),
        model: z.string().min(1, "Campo obrigatório"),
        fuel: z.nativeEnum(Fuel, {
            errorMap: (issue, ctx) => {
                return { message: "Selecione uma das opções: Diesel, Etanol, Gasolina ou Flex" };
            },
        }),
        price: z.string().min(1, "Campo obrigatório").or(z.number()),
        description: z.string().min(1, "Campo obrigatório"),
        coverPhoto: z.string().min(1, "Campo obrigatório"),
        image1: z.string().optional(),
        image2: z.string().optional(),
        gallery: z
            .union([z.string(), z.array(z.string().nullish())])
            .optional(),
        published: z.boolean().default(true),
    })
    .catchall(z.unknown());

export type createCarSchemaType = z.infer<typeof createCarSchema>;
