"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
exports.noteAboutClickingLinks = function (ui, state) {
    var modifier_key = state.isMac ? "cmd ( ⌘ )" : "ctrl";
    var clicks = state.isWindows || state.supportsHLinks ? "clicking" : "double clicking";
    var sidenote = chalk_1.default.italic.bold("Sidenote: ");
    ui.say(sidenote + " Holding " + modifier_key + " and " + clicks + " a link will open it in your browser.\n");
};
//# sourceMappingURL=common-setup.js.map