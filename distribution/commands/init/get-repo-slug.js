"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parse_git_config_1 = __importDefault(require("parse-git-config"));
var parse_github_url_1 = __importDefault(require("parse-github-url"));
exports.getRepoSlug = function () {
    var config = parse_git_config_1.default.sync();
    var possibleRemotes = [config['remote "upstream"'], config['remote "origin"']].filter(function (f) { return f; });
    if (possibleRemotes.length === 0) {
        return null;
    }
    var ghData = possibleRemotes.map(function (r) { return parse_github_url_1.default(r.url); });
    return ghData.length ? ghData[0].repo : undefined;
};
exports.getRepoInfo = function () {
    var config = parse_git_config_1.default.sync();
    var possibleRemotes = [config['remote "upstream"'], config['remote "origin"']].filter(function (f) { return f; });
    if (possibleRemotes.length === 0) {
        return "unknown";
    }
    var repoData = possibleRemotes.map(function (r) { return inspectURL(r.url); });
    return repoData.length ? repoData[0] : "unknown";
};
var inspectURL = function (url) {
    if (url.includes("github")) {
        return "github";
    }
    else if (url.includes("dev.azure.com") || url.includes(".visualstudio.com")) {
        return "azureDevops";
    }
    else if (url.includes("bitbucket.org")) {
        return "bitbucket";
    }
    else {
        return "unknown";
    }
};
//# sourceMappingURL=get-repo-slug.js.map