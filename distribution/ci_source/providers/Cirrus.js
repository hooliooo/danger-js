"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 *  You need to edit your `.cirrus.yml` to add a `script` like this:
 *
 *   ```yaml
 *     danger_script:
 *       - yarn danger ci
 *   ```
 *
 *  ### Token Setup
 *
 *  You need to add the `DANGER_GITHUB_API_TOKEN` environment variable, to do this,
 *  go to your repo's settings, by clicking the gear at `https://cirrus-ci.com/github/[user]/[repo]`.
 *  Generate the encrypted value, and add it to your `env` block.
 *
 *  Once you have added it, trigger a build.
 */
var Cirrus = /** @class */ (function () {
    function Cirrus(env) {
        this.env = env;
    }
    Object.defineProperty(Cirrus.prototype, "name", {
        get: function () {
            return "Cirrus CI";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirrus.prototype, "isCI", {
        get: function () {
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, ["CIRRUS_CI"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirrus.prototype, "isPR", {
        get: function () {
            var mustHave = ["CIRRUS_CI", "CIRRUS_PR", "CIRRUS_REPO_FULL_NAME"];
            var mustBeInts = ["CIRRUS_PR"];
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, mustHave) && ci_source_helpers_1.ensureEnvKeysAreInt(this.env, mustBeInts);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirrus.prototype, "pullRequestID", {
        get: function () {
            return this.env.CIRRUS_PR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirrus.prototype, "repoSlug", {
        get: function () {
            return this.env.CIRRUS_REPO_FULL_NAME;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cirrus.prototype, "ciRunURL", {
        get: function () {
            return "https://cirrus-ci.com/task/" + this.env.CIRRUS_TASK_ID;
        },
        enumerable: true,
        configurable: true
    });
    return Cirrus;
}());
exports.Cirrus = Cirrus;
//# sourceMappingURL=Cirrus.js.map