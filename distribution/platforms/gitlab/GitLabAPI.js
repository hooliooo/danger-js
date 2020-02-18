"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fetch_1 = require("../../api/fetch");
var gitlab_1 = require("gitlab");
var debug_1 = require("../../debug");
function getGitLabAPICredentialsFromEnv(env) {
    var host = "https://gitlab.com";
    var envHost = env["DANGER_GITLAB_HOST"];
    if (envHost) {
        // We used to support DANGER_GITLAB_HOST being just the host e.g. "gitlab.com"
        // however it is possible to have a custom host without SSL, ensure we only add the protocol if one is not provided
        var protocolRegex = /^http(s)*?:\/\//i;
        host = protocolRegex.test(envHost) ? envHost : "https://" + envHost;
    }
    return {
        host: host,
        token: env["DANGER_GITLAB_API_TOKEN"],
    };
}
exports.getGitLabAPICredentialsFromEnv = getGitLabAPICredentialsFromEnv;
var GitLabAPI = /** @class */ (function () {
    function GitLabAPI(repoMetadata, repoCredentials) {
        var _this = this;
        this.repoMetadata = repoMetadata;
        this.repoCredentials = repoCredentials;
        this.d = debug_1.debug("GitLabAPI");
        this.getUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getUser");
                        return [4 /*yield*/, this.api.Users.current()];
                    case 1:
                        user = _a.sent();
                        this.d("getUser", user);
                        return [2 /*return*/, user];
                }
            });
        }); };
        this.getMergeRequestInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            var mr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getMergeRequestInfo for repo: " + this.repoMetadata.repoSlug + " pr: " + this.repoMetadata.pullRequestID);
                        return [4 /*yield*/, this.api.MergeRequests.show(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID)];
                    case 1:
                        mr = _a.sent();
                        this.d("getMergeRequestInfo", mr);
                        return [2 /*return*/, mr];
                }
            });
        }); };
        this.getMergeRequestChanges = function () { return __awaiter(_this, void 0, void 0, function () {
            var mr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getMergeRequestChanges for repo: " + this.repoMetadata.repoSlug + " pr: " + this.repoMetadata.pullRequestID);
                        return [4 /*yield*/, this.api.MergeRequests.changes(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID)];
                    case 1:
                        mr = (_a.sent());
                        this.d("getMergeRequestChanges", mr.changes);
                        return [2 /*return*/, mr.changes];
                }
            });
        }); };
        this.getMergeRequestCommits = function () { return __awaiter(_this, void 0, void 0, function () {
            var commits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getMergeRequestCommits", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID);
                        return [4 /*yield*/, this.api.MergeRequests.commits(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID)];
                    case 1:
                        commits = _a.sent();
                        this.d("getMergeRequestCommits", commits);
                        return [2 /*return*/, commits];
                }
            });
        }); };
        this.getMergeRequestNotes = function () { return __awaiter(_this, void 0, void 0, function () {
            var api, notes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getMergeRequestNotes", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID);
                        api = this.api.MergeRequestNotes;
                        return [4 /*yield*/, api.all(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID)];
                    case 1:
                        notes = _a.sent();
                        this.d("getMergeRequestNotes", notes);
                        return [2 /*return*/, notes];
                }
            });
        }); };
        this.getMergeRequestInlineNotes = function () { return __awaiter(_this, void 0, void 0, function () {
            var notes, inlineNotes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getMergeRequestInlineNotes");
                        return [4 /*yield*/, this.getMergeRequestNotes()];
                    case 1:
                        notes = _a.sent();
                        inlineNotes = notes.filter(function (note) { return note.type == "DiffNote"; });
                        this.d("getMergeRequestInlineNotes", inlineNotes);
                        return [2 /*return*/, inlineNotes];
                }
            });
        }); };
        this.createMergeRequestDiscussion = function (content, position) { return __awaiter(_this, void 0, void 0, function () {
            var api, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("createMergeRequestDiscussion", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, content, position);
                        api = this.api.MergeRequestDiscussions;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api.create(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, content, {
                                position: position,
                            })];
                    case 2:
                        result = _a.sent();
                        this.d("createMergeRequestDiscussion", result);
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        this.d("createMergeRequestDiscussion", e_1);
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.createMergeRequestNote = function (body) { return __awaiter(_this, void 0, void 0, function () {
            var api, note, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("createMergeRequestNote", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, body);
                        api = this.api.MergeRequestNotes;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.d("createMergeRequestNote");
                        return [4 /*yield*/, api.create(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, body)];
                    case 2:
                        note = _a.sent();
                        this.d("createMergeRequestNote", note);
                        return [2 /*return*/, note];
                    case 3:
                        e_2 = _a.sent();
                        this.d("createMergeRequestNote", e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.reject()];
                }
            });
        }); };
        this.updateMergeRequestNote = function (id, body) { return __awaiter(_this, void 0, void 0, function () {
            var api, note, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("updateMergeRequestNote", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, id, body);
                        api = this.api.MergeRequestNotes;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api.edit(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, id, body)];
                    case 2:
                        note = _a.sent();
                        this.d("updateMergeRequestNote", note);
                        return [2 /*return*/, note];
                    case 3:
                        e_3 = _a.sent();
                        this.d("updateMergeRequestNote", e_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.reject()];
                }
            });
        }); };
        // note: deleting the _only_ note in a discussion also deletes the discussion \o/
        this.deleteMergeRequestNote = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var api, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("deleteMergeRequestNote", this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, id);
                        api = this.api.MergeRequestNotes;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, api.remove(this.repoMetadata.repoSlug, this.repoMetadata.pullRequestID, id)];
                    case 2:
                        _a.sent();
                        this.d("deleteMergeRequestNote", true);
                        return [2 /*return*/, true];
                    case 3:
                        e_4 = _a.sent();
                        this.d("deleteMergeRequestNote", e_4);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getFileContents = function (path, slug, ref) { return __awaiter(_this, void 0, void 0, function () {
            var api, projectId, mr, response, result, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.d("getFileContents requested for path:" + path + ", slug:" + slug + ", ref:" + ref);
                        api = this.api.RepositoryFiles;
                        projectId = slug || this.repoMetadata.repoSlug;
                        if (!!ref) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getMergeRequestInfo()];
                    case 1:
                        mr = _a.sent();
                        ref = mr.diff_refs.head_sha;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        this.d("getFileContents", projectId, path, ref);
                        return [4 /*yield*/, api.show(projectId, path, ref)];
                    case 3:
                        response = _a.sent();
                        result = Buffer.from(response.content, "base64").toString();
                        this.d("getFileContents", result);
                        return [2 /*return*/, result];
                    case 4:
                        e_5 = _a.sent();
                        this.d("getFileContents", e_5);
                        // GitHubAPI.fileContents returns "" when the file does not exist, keep it consistent across providers
                        if (e_5.response.status === 404) {
                            return [2 /*return*/, ""];
                        }
                        throw e_5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.fetch = fetch_1.api;
        this.api = new gitlab_1.Gitlab(repoCredentials);
        this.hostURL = repoCredentials.host;
    }
    Object.defineProperty(GitLabAPI.prototype, "projectURL", {
        get: function () {
            return this.hostURL + "/" + this.repoMetadata.repoSlug;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitLabAPI.prototype, "mergeRequestURL", {
        get: function () {
            return this.projectURL + "/merge_requests/" + this.repoMetadata.pullRequestID;
        },
        enumerable: true,
        configurable: true
    });
    return GitLabAPI;
}());
exports.default = GitLabAPI;
//# sourceMappingURL=GitLabAPI.js.map