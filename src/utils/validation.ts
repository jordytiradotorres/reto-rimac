import { z } from "zod";

export const formSchema = z.object({
  documentType: z.enum(["dni", "ruc"], {
    required_error: "El tipo de documento es obligatorio",
  }),
  documentValue: z
    .string()
    .min(1, "El número de documento es obligatorio")
    .regex(/^\d+$/, "El número de documento debe ser numérico"),
  celular: z
    .string()
    .min(9, "El celular debe tener al menos 9 dígitos")
    .max(9, "El celular debe tener 9 dígitos")
    .regex(/^\d+$/, "El celular debe ser numérico"),
  privacyPolicy: z.boolean(),
  commercialPolicy: z.boolean(),
});

export type FormValues = z.infer<typeof formSchema>;
