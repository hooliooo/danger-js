"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ci_source_helpers_1 = require("../ci_source_helpers");
var AzureDevops = /** @class */ (function () {
    function AzureDevops(env) {
        this.env = env;
    }
    Object.defineProperty(AzureDevops.prototype, "name", {
        get: function () {
            return "AzureDevops";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "isCI", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "isPR", {
        get: function () {
            if (ci_source_helpers_1.ensureEnvKeysExist(this.env, ["CI_PULL_REQUEST"]) || ci_source_helpers_1.ensureEnvKeysExist(this.env, ["CIRCLE_PULL_REQUEST"])) {
                return true;
            }
            var mustHave = ["CIRCLE_CI_API_TOKEN", "CIRCLE_PROJECT_USERNAME", "CIRCLE_PROJECT_REPONAME", "CIRCLE_BUILD_NUM"];
            return ci_source_helpers_1.ensureEnvKeysExist(this.env, mustHave) && ci_source_helpers_1.ensureEnvKeysAreInt(this.env, ["CIRCLE_PR_NUMBER"]);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "repoSlug", {
        get: function () {
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "pullRequestID", {
        get: function () {
            return this.env.BITRISE_PULL_REQUEST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "commitHash", {
        get: function () {
            return this.env.BITRISE_GIT_COMMIT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "ciRunURL", {
        get: function () {
            return this.env.BITRISE_PULL_REQUEST;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AzureDevops.prototype, "useEventDSL", {
        get: function () {
            return this.env.GITHUB_EVENT_NAME !== "pull_request";
        },
        enumerable: true,
        configurable: true
    });
    return AzureDevops;
}());
exports.AzureDevops = AzureDevops;
//# sourceMappingURL=AzureDevops.js.map