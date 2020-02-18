import { Env, CISource } from "../ci_source";
/**
 * Nevercode.io CI Integration
 *
 * Environment Variables Documented: https://developer.nevercode.io/v1.0/docs/environment-variables-files
 */
export declare class Nevercode implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string | undefined;
}
