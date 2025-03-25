export declare const listLocationEmployees: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        locationId: string;
        limit?: number | undefined;
        cursor?: string | undefined;
        as?: string | undefined;
        order?: "ASC" | "DESC" | undefined;
        sortBy?: "created_at" | "updated_at" | undefined;
    };
    output: {
        employees: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            position: string | null;
        }[];
        nextCursor?: string | undefined;
    };
}>;
//# sourceMappingURL=listLocationEmployees.d.ts.map