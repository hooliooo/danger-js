"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var debug_1 = require("../debug");
var githubIssueTemplate_1 = require("../runner/templates/githubIssueTemplate");
var d = debug_1.debug("GitLab");
var GitLab = /** @class */ (function () {
    function GitLab(api) {
        var _this = this;
        this.api = api;
        this.getReviewInfo = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.api.getMergeRequestInfo()];
            });
        }); };
        // returns the `danger.gitlab` object
        this.getPlatformReviewDSLRepresentation = function () { return __awaiter(_this, void 0, void 0, function () {
            var mr, commits;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getReviewInfo()];
                    case 1:
                        mr = _a.sent();
                        return [4 /*yield*/, this.api.getMergeRequestCommits()];
                    case 2:
                        commits = _a.sent();
                        return [2 /*return*/, {
                                metadata: this.api.repoMetadata,
                                mr: mr,
                                commits: commits,
                            }];
                }
            });
        }); };
        this.getPlatformGitRepresentation = function () { return __awaiter(_this, void 0, void 0, function () {
            var changes, commits, mappedCommits, modified_files, created_files, deleted_files;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getMergeRequestChanges()];
                    case 1:
                        changes = _a.sent();
                        return [4 /*yield*/, this.api.getMergeRequestCommits()];
                    case 2:
                        commits = _a.sent();
                        mappedCommits = commits.map(function (commit) {
                            return {
                                sha: commit.id,
                                author: {
                                    name: commit.author_name,
                                    email: commit.author_email,
                                    date: commit.authored_date,
                                },
                                committer: {
                                    name: commit.committer_name,
                                    email: commit.committer_email,
                                    date: commit.committed_date,
                                },
                                message: commit.message,
                                parents: commit.parent_ids,
                                url: _this.api.projectURL + "/commit/" + commit.id,
                                tree: null,
                            };
                        });
                        modified_files = changes
                            .filter(function (change) { return !change.new_file && !change.deleted_file; })
                            .map(function (change) { return change.new_path; });
                        created_files = changes.filter(function (change) { return change.new_file; }).map(function (change) { return change.new_path; });
                        deleted_files = changes.filter(function (change) { return change.deleted_file; }).map(function (change) { return change.new_path; });
                        return [2 /*return*/, {
                                modified_files: modified_files,
                                created_files: created_files,
                                deleted_files: deleted_files,
                                commits: mappedCommits,
                            }];
                }
            });
        }); };
        this.getInlineComments = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var dangerUserID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getUser()];
                    case 1:
                        dangerUserID = (_a.sent()).id;
                        return [4 /*yield*/, this.api.getMergeRequestInlineNotes()];
                    case 2: return [2 /*return*/, (_a.sent()).map(function (note) {
                            return {
                                id: "" + note.id,
                                body: note.body,
                                // XXX: we should re-use the logic in getDangerNotes, need to check what inline comment template we're using if any
                                ownedByDanger: note.author.id === dangerUserID && note.body.includes(dangerID),
                            };
                        })];
                }
            });
        }); };
        this.updateOrCreateComment = function (dangerID, newComment) { return __awaiter(_this, void 0, void 0, function () {
            var notes, note, _i, notes_1, deleteme;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d("updateOrCreateComment", { dangerID: dangerID, newComment: newComment });
                        return [4 /*yield*/, this.getDangerNotes(dangerID)];
                    case 1:
                        notes = _a.sent();
                        debugger;
                        if (!notes.length) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.api.updateMergeRequestNote(notes[0].id, newComment)
                            // delete the rest
                        ];
                    case 2:
                        // update the first
                        note = _a.sent();
                        _i = 0, notes_1 = notes;
                        _a.label = 3;
                    case 3:
                        if (!(_i < notes_1.length)) return [3 /*break*/, 6];
                        deleteme = notes_1[_i];
                        if (deleteme === notes[0]) {
                            return [3 /*break*/, 5];
                        }
                        return [4 /*yield*/, this.api.deleteMergeRequestNote(deleteme.id)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.api.createMergeRequestNote(newComment)];
                    case 8:
                        // create a new note
                        note = _a.sent();
                        _a.label = 9;
                    case 9: 
                    // create URL from note
                    // "https://gitlab.com/group/project/merge_requests/154#note_132143425"
                    return [2 /*return*/, this.api.mergeRequestURL + "#note_" + note.id];
                }
            });
        }); };
        this.createComment = function (comment) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                d("createComment", { comment: comment });
                return [2 /*return*/, this.api.createMergeRequestNote(comment)];
            });
        }); };
        this.createInlineComment = function (git, comment, path, line) { return __awaiter(_this, void 0, void 0, function () {
            var mr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d("createInlineComment", { git: git, comment: comment, path: path, line: line });
                        return [4 /*yield*/, this.api.getMergeRequestInfo()];
                    case 1:
                        mr = _a.sent();
                        return [2 /*return*/, this.api.createMergeRequestDiscussion(comment, {
                                position_type: "text",
                                base_sha: mr.diff_refs.base_sha,
                                start_sha: mr.diff_refs.start_sha,
                                head_sha: mr.diff_refs.head_sha,
                                old_path: path,
                                old_line: null,
                                new_path: path,
                                new_line: line,
                            })];
                }
            });
        }); };
        this.updateInlineComment = function (comment, id) { return __awaiter(_this, void 0, void 0, function () {
            var nid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d("updateInlineComment", { comment: comment, id: id });
                        nid = parseInt(id) // fingers crossed
                        ;
                        return [4 /*yield*/, this.api.updateMergeRequestNote(nid, comment)];
                    case 1: // fingers crossed
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.deleteInlineComment = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var nid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d("deleteInlineComment", { id: id });
                        nid = parseInt(id) // fingers crossed
                        ;
                        return [4 /*yield*/, this.api.deleteMergeRequestNote(nid)];
                    case 1: // fingers crossed
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.deleteMainComment = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var notes, _i, notes_2, note;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDangerNotes(dangerID)];
                    case 1:
                        notes = _a.sent();
                        _i = 0, notes_2 = notes;
                        _a.label = 2;
                    case 2:
                        if (!(_i < notes_2.length)) return [3 /*break*/, 5];
                        note = notes_2[_i];
                        d("deleteMainComment", { id: note.id });
                        return [4 /*yield*/, this.api.deleteMergeRequestNote(note.id)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/, notes.length > 0];
                }
            });
        }); };
        this.getDangerNotes = function (dangerID) { return __awaiter(_this, void 0, void 0, function () {
            var dangerUserId, notes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getUser()];
                    case 1:
                        dangerUserId = (_a.sent()).id;
                        return [4 /*yield*/, this.api.getMergeRequestNotes()];
                    case 2:
                        notes = _a.sent();
                        return [2 /*return*/, notes.filter(function (_a) {
                                var id = _a.author.id, body = _a.body, system = _a.system, type = _a.type;
                                return !system && // system notes are generated when the user interacts with the UI e.g. changing a PR title
                                    type == null && // we only want "normal" comments on the main body of the MR;
                                    id === dangerUserId &&
                                    body.includes(githubIssueTemplate_1.dangerIDToString(dangerID));
                            } // danger-id-(dangerID) is included in a hidden comment in the githubIssueTemplate
                            )];
                }
            });
        }); };
        this.updateStatus = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                d("updateStatus", {});
                return [2 /*return*/, true];
            });
        }); };
        this.getFileContents = this.api.getFileContents;
        this.name = "GitLab";
    }
    GitLab.prototype.supportsCommenting = function () {
        return true;
    };
    GitLab.prototype.supportsInlineComments = function () {
        return true;
    };
    return GitLab;
}());
exports.default = GitLab;
exports.gitlabJSONToGitLabDSL = function (gl, api) { return (__assign(__assign({}, gl), { utils: {
        fileContents: api.getFileContents,
    } })); };
//# sourceMappingURL=GitLab.js.map