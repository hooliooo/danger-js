import { Env, CISource } from "../ci_source"
export declare class AzureDevops implements CISource {
  private readonly env
  constructor(env: Env)
  readonly name: string
  readonly isCI: boolean
  readonly isPR: boolean
  readonly repoSlug: string
  readonly pullRequestID: string
  readonly commitHash: string
  readonly ciRunURL: string
  readonly useEventDSL: boolean
}
