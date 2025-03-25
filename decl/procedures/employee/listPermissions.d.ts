export declare const listPermissions: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        employeeId: string;
        as?: string | undefined;
    };
    output: {
        subjectId: string;
        objectType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
        objectId: string;
        action: "ASSIGN_LOCATION" | "APPROVE_CREDENTIAL" | "ASSIGN_VEHICLE" | "VIEW" | "EDIT" | "UPLOAD_FILE";
    }[];
}>;
//# sourceMappingURL=listPermissions.d.ts.map