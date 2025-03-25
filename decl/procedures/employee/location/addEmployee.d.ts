export declare const addEmployee: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        employeeId: string;
        locationId: string;
        as?: string | undefined;
        asManager?: boolean | undefined;
    };
    output: {
        success: true;
    };
}>;
//# sourceMappingURL=addEmployee.d.ts.map