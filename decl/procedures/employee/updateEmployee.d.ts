export declare const updateEmployee: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        update: {
            position?: string | null | undefined;
            notificationSettings?: {
                email?: boolean | undefined;
                preferredEmail?: string | null | undefined;
                preferredDeliveryTime?: string | null | undefined;
                preferredTimezone?: string | null | undefined;
            } | undefined;
        };
        employeeId: string;
        as?: string | undefined;
    };
    output: {
        id: string;
        position: string | null;
    };
}>;
//# sourceMappingURL=updateEmployee.d.ts.map