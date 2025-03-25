import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: import("./trpc").Context;
    meta: import("@bbsify-landed/trpc-openapi-gen").OpenApiMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    health: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            status: "ok";
        };
    }>;
    user: {
        whoAmI: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: string;
                employee: {
                    id: string;
                    position: string | null;
                } | null;
            };
        }>;
    };
    employee: {
        getStatus: import("@trpc/server").TRPCQueryProcedure<{
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
        list: import("@trpc/server").TRPCQueryProcedure<{
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
                        role: import("@prisma/client").$Enums.UserRole;
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
        listPermissions: import("@trpc/server").TRPCQueryProcedure<{
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
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                create: {};
                as?: string | undefined;
            };
            output: {
                id: string;
                position: string | null;
            };
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
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
        update: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                update: {
                    position?: string | null | undefined;
                    notificationSettings?: {
                        email?: boolean | undefined;
                        preferredEmail?: string | null | undefined;
                        preferredDeliveryTime?: string | null | undefined;
                        preferredTimezone?: string | null | undefined;
                    } | undefined;
                };
                employeeId: string;
                as?: string | undefined;
            };
            output: {
                id: string;
                position: string | null;
            };
        }>;
        files: {
            createFileUploadUrl: import("@trpc/server").TRPCMutationProcedure<{
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
            completeFileUpload: import("@trpc/server").TRPCMutationProcedure<{
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
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    employeeId: string;
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
                }[];
            }>;
        };
        documents: {
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    entityId: string;
                    entityType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
                    as?: string | undefined;
                };
                output: {
                    id: string;
                    file: {
                        id: string;
                        name: string;
                    };
                    entityId: string;
                    entityType: "EMPLOYEE" | "LOCATION" | "VEHICLE";
                    successor: {
                        id: string;
                        name: string;
                    } | null;
                }[];
            }>;
            create: import("@trpc/server").TRPCMutationProcedure<{
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
                    entityType: import("@prisma/client").$Enums.EntityType;
                    fileId: string;
                    successorId: string | null;
                    isCurrent: boolean;
                    validFrom: Date | null;
                    validUntil: Date | null;
                    lastNotifiedAt: Date | null;
                };
            }>;
            approve: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    documentId: string;
                    as?: string | undefined;
                };
                output: void;
            }>;
        };
        location: {
            create: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    create: {};
                    as?: string | undefined;
                };
                output: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    complianceType: string | null;
                };
            }>;
            list: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    limit?: number | undefined;
                    cursor?: string | undefined;
                    as?: string | undefined;
                    order?: "ASC" | "DESC" | undefined;
                    sortBy?: "created_at" | "updated_at" | undefined;
                };
                output: {
                    locations: ({
                        vehicles: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            locationId: string;
                            vehicleId: string;
                        }[];
                        employees: {
                            id: string;
                            createdAt: Date;
                            updatedAt: Date;
                            employeeId: string;
                            locationId: string;
                        }[];
                    } & {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        complianceType: string | null;
                    })[];
                    nextCursor: string | undefined;
                };
            }>;
            listEmployees: import("@trpc/server").TRPCQueryProcedure<{
                input: {
                    locationId: string;
                    limit?: number | undefined;
                    cursor?: string | undefined;
                    as?: string | undefined;
                    order?: "ASC" | "DESC" | undefined;
                    sortBy?: "created_at" | "updated_at" | undefined;
                };
                output: {
                    employees: {
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        position: string | null;
                    }[];
                    nextCursor?: string | undefined;
                };
            }>;
            get: import("@trpc/server").TRPCQueryProcedure<{
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
            update: import("@trpc/server").TRPCMutationProcedure<{
                input: {
                    update: {
                        name?: string | null | undefined;
                    };
                    locationId: string;
                    as?: string | undefined;
                };
                output: {
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    complianceType: string | null;
                };
            }>;
            addEmployee: import("@trpc/server").TRPCMutationProcedure<{
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
            getStatus: import("@trpc/server").TRPCQueryProcedure<{
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
        };
    };
    admin: {
        listComplianceGraphs: import("@trpc/server").TRPCQueryProcedure<{
            input: void;
            output: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                forPosition: string | null;
                graphDocument: import("@prisma/client/runtime/library").JsonValue;
            }[];
        }>;
    };
}>>;
export type AppRouter = typeof appRouter;
export type AppInput = inferRouterInputs<AppRouter>;
export type AppOutput = inferRouterOutputs<AppRouter>;
//# sourceMappingURL=router.d.ts.map