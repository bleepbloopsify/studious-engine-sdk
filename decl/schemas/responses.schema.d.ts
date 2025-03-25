import z from 'zod';
export declare const successResponseSchema: z.ZodObject<{
    success: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    success: true;
}, {
    success: true;
}>;
export type SuccessResponse = z.infer<typeof successResponseSchema>;
//# sourceMappingURL=responses.schema.d.ts.map