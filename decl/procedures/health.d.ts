import z from 'zod';
export declare const outputSchema: z.ZodObject<{
    status: z.ZodLiteral<"ok">;
}, "strip", z.ZodTypeAny, {
    status: "ok";
}, {
    status: "ok";
}>;
export declare const health: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        status: "ok";
    };
}>;
//# sourceMappingURL=health.d.ts.map