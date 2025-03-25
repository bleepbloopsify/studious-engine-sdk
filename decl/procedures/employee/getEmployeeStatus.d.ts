export declare const getEmployeeStatus: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        employeeId: string;
        as?: string | undefined;
    };
    output: {
        errors: {
            message: string;
            documents?: {
                document: string;
                accessedAttributes: string[];
            }[] | undefined;
        }[];
        accessedDocuments: {
            document: string;
            accessedAttributes: string[];
        }[];
        evaluation: boolean;
        errorsByDocument: Record<string, {
            message: string;
            accessedAttributes: string[];
        }[]>;
    };
}>;
//# sourceMappingURL=getEmployeeStatus.d.ts.map