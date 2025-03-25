import { z } from 'zod';
export declare const fileAttributesSchema: z.ZodRecord<z.ZodString, z.ZodString>;
export type FileAttributes = z.infer<typeof fileAttributesSchema>;
export declare const completeFileUpload: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        employeeId: string;
        file: {
            signature: string;
            fileName: string;
            contentType: string;
            fileKey: string;
        };
        as?: string | undefined;
    };
    output: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        employeeId: string | null;
        key: string;
        mimeType: string;
        size: number;
        attributes: import("@prisma/client/runtime/library").JsonValue;
    };
}>;
//# sourceMappingURL=completeFileUpload.d.ts.map