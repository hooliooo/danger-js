import { InitUI, InitState } from "./interfaces";
export declare const setupUnknownRepoProvider: (ui: InitUI) => Promise<void>;
export declare const setupAzureDevopsAccount: (ui: InitUI, state: InitState) => Promise<void>;
export declare const setupGithubAccount: (ui: InitUI, state: InitState) => Promise<void>;
