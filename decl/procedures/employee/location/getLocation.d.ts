export declare const getLocation: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: string;
        as?: string | undefined;
    };
    output: {
        id: string;
        employees: {
            employeeId: string;
        }[];
    };
}>;
//# sourceMappingURL=getLocation.d.ts.map