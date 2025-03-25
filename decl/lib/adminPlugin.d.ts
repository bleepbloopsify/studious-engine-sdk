export declare const adminPlugin: () => {
    id: "adminPlugin";
    schema: {
        user: {
            fields: {
                role: {
                    type: "string";
                    required: true;
                    unique: false;
                    references: undefined;
                    defaultValue: string;
                };
            };
        };
    };
};
//# sourceMappingURL=adminPlugin.d.ts.map