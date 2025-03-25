export declare const getLocationStatus: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        locationId: string;
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
//# sourceMappingURL=getLocationStatus.d.ts.map