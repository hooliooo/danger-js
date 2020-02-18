import { Env, CISource } from "../ci_source";
export declare class GitLabCI implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get commitHash(): string;
}