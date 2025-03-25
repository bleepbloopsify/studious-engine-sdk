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
            };
        }>;
    };
    graph: {
        create: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                name: string;
            };
            output: {
                name: string;
                id: string;
            };
        }>;
        get: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: {
                name: string;
                id: string;
            };
        }>;
        evaluate: import("@trpc/server").TRPCQueryProcedure<{
            input: {
                id: string;
            };
            output: {
                name: string;
                id: string;
            };
        }>;
    };
}>>;
export type AppRouter = typeof appRouter;
export type AppInput = inferRouterInputs<AppRouter>;
export type AppOutput = inferRouterOutputs<AppRouter>;
//# sourceMappingURL=router.d.ts.map