import { Env, CISource } from "../ci_source";
export declare class AzureDevops implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get repoSlug(): string;
    get pullRequestID(): string;
    get commitHash(): string;
    get ciRunURL(): string;
    get useEventDSL(): boolean;
}
