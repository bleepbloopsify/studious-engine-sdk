export declare const listFiles: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        employeeId: string;
        as?: string | undefined;
    };
    output: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        employeeId: string | null;
        key: string;
        mimeType: string;
        size: number;
        attributes: import("@prisma/client/runtime/library").JsonValue;
    }[];
}>;
//# sourceMappingURL=listFiles.d.ts.map