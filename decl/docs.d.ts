declare const entrypoint: {
    fetch(request: Request<unknown, IncomingRequestCfProperties<unknown>>, env: {
        APP_DISPLAY_NAME: string;
        APP_VERSION: string;
        BASE_URL: string;
    }, ctx: ExecutionContext): Promise<Response>;
};
export default entrypoint;
//# sourceMappingURL=docs.d.ts.map