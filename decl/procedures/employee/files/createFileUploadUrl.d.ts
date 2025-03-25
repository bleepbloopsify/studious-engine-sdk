export declare const createFileUploadUrl: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        employeeId: string;
        fileName: string;
        contentType: string;
        as?: string | undefined;
    };
    output: {
        url: string;
        fileKey: string;
        signature: string;
    };
}>;
//# sourceMappingURL=createFileUploadUrl.d.ts.map