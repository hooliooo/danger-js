import { GitHubPRDSL, GitHubUtilsDSL } from "./../../dsl/GitHubDSL";
declare const utils: (pr: GitHubPRDSL | undefined, api: any) => GitHubUtilsDSL;
/** Generates the fileContents function, needed so that Peril can re-create this func for an event */
export declare const fileContentsGenerator: (api: any, defaultRepoSlug: string | undefined, defaultRef: string | undefined) => (path: string, repoSlug?: string | undefined, ref?: string | undefined) => Promise<string>;
/** Generates the createUpdatedIssueWithID function, needed so that Peril can re-create this func for an event */
export declare const createUpdatedIssueWithIDGenerator: (api: any) => (id: string, content: string, settings: {
    title: string;
    open: boolean;
    owner: string;
    repo: string;
}) => Promise<any>;
interface PRCreationConfig {
    /** PR title */
    title: string;
    /** PR body */
    body: string;
    /** The danger in danger/danger-js - defaults to the PR base name if undefined */
    owner?: string;
    /** The danger-js in danger/danger-js - defaults to the PR base repo if undefined */
    repo?: string;
    /** A message for the commit */
    commitMessage: string;
    /** The name of the branch on the repo */
    newBranchName: string;
    /** Base branch for the new branch e.g. what should Danger create the new branch from */
    baseBranch: string;
}
export declare const createOrUpdatePR: (pr: GitHubPRDSL | undefined, api: any) => (config: PRCreationConfig, fileMap: any) => Promise<any>;
export declare const createOrAddLabel: (pr: GitHubPRDSL | undefined, api: any) => (labelConfig: {
    name: string;
    color: string;
    description: string;
}, repoConfig?: {
    owner: string;
    repo: string;
    id: number;
} | undefined) => Promise<void>;
export default utils;
