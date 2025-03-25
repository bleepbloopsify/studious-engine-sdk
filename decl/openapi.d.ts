export declare const description: string;
export declare const openapiDocument: import("@bbsify-landed/trpc-openapi-gen").OpenAPIObject;
export declare const generateAuthOpenApiDocument: () => Promise<{
    openapi: string;
    info: {
        title: string;
        description: string;
        version: string;
    };
    components: {
        securitySchemes: {
            apiKeyCookie: {
                type: string;
                in: string;
                name: string;
                description: string;
            };
            bearerAuth: {
                type: string;
                scheme: string;
                description: string;
            };
        };
        schemas: {};
    };
    security: {
        apiKeyCookie: never[];
        bearerAuth: never[];
    }[];
    servers: {
        url: string;
    }[];
    tags: {
        name: string;
        description: string;
    }[];
    paths: Record<string, import("better-auth/plugins").Path>;
}>;
export declare const baseApiRefConfig: {
    hideModels: boolean;
    hideDownloadButton: boolean;
    hideClientButton: boolean;
    hiddenClients: {
        ruby: boolean;
        php: boolean;
        swift: boolean;
        dart: boolean;
        c: boolean;
        clojure: boolean;
        csharp: boolean;
        http: boolean;
        java: boolean;
        kotlin: boolean;
        objc: boolean;
        powershell: boolean;
        r: boolean;
    };
};
//# sourceMappingURL=openapi.d.ts.map