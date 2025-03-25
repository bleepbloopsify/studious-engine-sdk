export interface Signer<T extends object = object> {
    sign: (data: T) => Promise<string>;
    verify: (data: T, signature: string) => Promise<boolean>;
    guard: (data: T, signature: string) => Promise<void>;
}
export declare function createSigner(secret: string): Signer<object>;
//# sourceMappingURL=signer.d.ts.map