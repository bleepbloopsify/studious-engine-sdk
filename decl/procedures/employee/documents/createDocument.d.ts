import { DB } from '@repo/db';
export declare const createDocument: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityId: string;
        entityType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
        fileId: string;
        name?: string | undefined;
        as?: string | undefined;
    };
    output: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        entityId: string;
        entityType: DB.$Enums.EntityType;
        fileId: string;
        successorId: string | null;
        isCurrent: boolean;
        validFrom: Date | null;
        validUntil: Date | null;
        lastNotifiedAt: Date | null;
    };
}>;
//# sourceMappingURL=createDocument.d.ts.map