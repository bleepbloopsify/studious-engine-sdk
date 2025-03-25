import { DB } from '@repo/db';
export declare const listEmployees: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        limit?: number | undefined;
        cursor?: string | undefined;
        as?: string | undefined;
        order?: "ASC" | "DESC" | undefined;
        sortBy?: "created_at" | "updated_at" | undefined;
    };
    output: {
        employees: ({
            user: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                name: string;
                role: DB.$Enums.UserRole;
                email: string;
                image: string | null;
                emailVerified: boolean;
            } | null;
            locations: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                employeeId: string;
                locationId: string;
            }[];
            vehicles: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                employeeId: string;
                vehicleId: string;
            }[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            position: string | null;
        })[];
        nextCursor: string | undefined;
    };
}>;
//# sourceMappingURL=listEmployees.d.ts.map