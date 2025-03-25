import { S3Client } from '@aws-sdk/client-s3';
import { OpenApiMeta } from '@bbsify-landed/trpc-openapi-gen';
import { PrismaClient } from '@repo/db';
import { Signer } from './lib/signer';
import { Workers } from './lib/workerRequester';
export type AppSession = {
    user: {
        id: string;
        role: string;
    };
};
export type Context = {
    session?: AppSession | null;
    db?: PrismaClient;
    s3Client?: S3Client;
    uploadsBucketName?: string;
    signer?: Signer;
    workers: Workers;
};
export declare const createCallerFactory: <TRecord extends import("@trpc/server").RouterRecord>(router: Pick<import("@trpc/server/unstable-core-do-not-import").Router<{
    ctx: Context;
    meta: OpenApiMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, TRecord>, "_def">) => import("@trpc/server/unstable-core-do-not-import").RouterCaller<{
    ctx: Context;
    meta: OpenApiMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, TRecord>;
export declare const router: <TInput extends import("@trpc/server/unstable-core-do-not-import").CreateRouterOptions>(input: TInput) => import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: Context;
    meta: OpenApiMeta;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<TInput>>;
export declare const publicProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, object, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const authProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, {
    session: AppSession;
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const authDbProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, {
    session: AppSession;
    db: import("@prisma/client").PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const authDbWorkerProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, {
    session: AppSession;
    db: import("@prisma/client").PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    workers: Workers;
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const authDbS3Procedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, {
    session: AppSession;
    db: import("@prisma/client").PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    s3Client: S3Client;
    uploadsBucketName: string;
    signer: Signer<object>;
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
export declare const authDBS3WorkerProcedure: import("@trpc/server/unstable-core-do-not-import").ProcedureBuilder<Context, OpenApiMeta, {
    session: AppSession;
    db: import("@prisma/client").PrismaClient<import("@prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs>;
    s3Client: S3Client;
    uploadsBucketName: string;
    signer: Signer<object>;
    workers: Workers;
}, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, typeof import("@trpc/server/unstable-core-do-not-import").unsetMarker, false>;
//# sourceMappingURL=trpc.d.ts.map