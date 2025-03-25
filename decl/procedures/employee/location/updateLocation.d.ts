export declare const updateLocation: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        update: {
            name?: string | null | undefined;
        };
        locationId: string;
        as?: string | undefined;
    };
    output: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        complianceType: string | null;
    };
}>;
//# sourceMappingURL=updateLocation.d.ts.map