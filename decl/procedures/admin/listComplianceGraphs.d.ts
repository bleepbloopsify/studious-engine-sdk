export declare const listComplianceGraphs: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        forPosition: string | null;
        graphDocument: import("@prisma/client/runtime/library").JsonValue;
    }[];
}>;
//# sourceMappingURL=listComplianceGraphs.d.ts.map