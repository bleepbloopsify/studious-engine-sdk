export declare const listDocuments: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityId: string;
        entityType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
        as?: string | undefined;
    };
    output: {
        id: string;
        file: {
            id: string;
            name: string;
        };
        entityId: string;
        entityType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
        successor: {
            id: string;
            name: string;
        } | null;
    }[];
}>;
//# sourceMappingURL=listDocuments.d.ts.map