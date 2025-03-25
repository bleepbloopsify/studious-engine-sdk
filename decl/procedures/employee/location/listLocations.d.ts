export declare const listLocations: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        limit?: number | undefined;
        cursor?: string | undefined;
        as?: string | undefined;
        order?: "ASC" | "DESC" | undefined;
        sortBy?: "created_at" | "updated_at" | undefined;
    };
    output: {
        locations: ({
            vehicles: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                locationId: string;
                vehicleId: string;
            }[];
            employees: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                employeeId: string;
                locationId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            complianceType: string | null;
        })[];
        nextCursor: string | undefined;
    };
}>;
//# sourceMappingURL=listLocations.d.ts.map