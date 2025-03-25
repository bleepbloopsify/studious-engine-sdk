export declare const getEmployee: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        employeeId: string;
        as?: string | undefined;
    };
    output: {
        id: string;
        user: {
            id: string;
            name: string;
            email: string;
        } | null;
        position: string | null;
    };
}>;
//# sourceMappingURL=getEmployee.d.ts.map