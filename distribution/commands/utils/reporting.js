"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownCode = function (string) { return "\n```sh\n" + string + "\n```\n"; };
exports.resultsWithFailure = function (failure, moreMarkdown) {
    var fail = { message: failure };
    return {
        warnings: [],
        messages: [],
        fails: [fail],
        markdowns: moreMarkdown ? [{ message: moreMarkdown }] : [],
    };
};
exports.mergeResults = function (left, right) {
    return {
        warnings: __spreadArrays(left.warnings, right.warnings),
        messages: __spreadArrays(left.messages, right.messages),
        fails: __spreadArrays(left.fails, right.fails),
        markdowns: __spreadArrays(left.markdowns, right.markdowns),
    };
};
//# sourceMappingURL=reporting.js.map