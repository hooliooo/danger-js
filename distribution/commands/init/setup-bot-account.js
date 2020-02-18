"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("./interfaces");
var common_setup_1 = require("./common-setup");
exports.setupUnknownRepoProvider = function (ui) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ui.say("In order to get the most out of Danger, I'd recommend giving it the ability to post in");
        ui.say("the code-review comment section.");
        ui.say("Unfortunately we are unable to tell what type of repo provider this is.");
        return [2 /*return*/];
    });
}); };
exports.setupAzureDevopsAccount = function (ui, state) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Step 2: Give Azure Devops to update");
                ui.say("In order to get the most out of Danger, I'd recommend giving it the ability to post in");
                ui.say("the code-review comment section.");
                ui.say("Unfortunately, these types of users required directly go into your pricing.");
                ui.say("\n" +
                    ui.link("Azure Devops Services pricing", "https://azure.microsoft.com/en-us/pricing/details/devops/azure-devops-services/") +
                    "\n");
                return [4 /*yield*/, ui.pause(1)];
            case 1:
                _a.sent();
                common_setup_1.noteAboutClickingLinks(ui, state);
                return [4 /*yield*/, ui.pause(1)];
            case 2:
                _a.sent();
                ui.say("Here are your current options to accomodate these pricing constraints");
                ui.say("1. (pricing friendly) Use an existing user with a provisioned PAT token to post in PRs");
                ui.say("2. (ideal) Create a new basic user with a provisioned PAT token o post in PRs");
                ui.say("3. Use OAuth access via Azure Devops to handle PRs");
                ui.say("Regardless you need to setup a PAT token");
                return [2 /*return*/];
        }
    });
}); };
exports.setupGithubAccount = function (ui, state) { return __awaiter(_this, void 0, void 0, function () {
    var flickr, googImages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ui.header("Step 2: Creating a GitHub account");
                ui.say("In order to get the most out of Danger, I'd recommend giving it the ability to post in");
                ui.say("the code-review comment section.");
                ui.say("\n" + ui.link("GitHub Home", "https://github.com") + "\n");
                return [4 /*yield*/, ui.pause(1)];
            case 1:
                _a.sent();
                ui.say("IMO, it's best to do this by using the private mode of your browser.");
                ui.say("Create an account like: " + interfaces_1.highlight(state.botName) + " and don't forget a cool robot avatar too.\n");
                return [4 /*yield*/, ui.pause(1)];
            case 2:
                _a.sent();
                ui.say("Here are great resources for creative-commons images of robots:\n");
                flickr = ui.link("flickr", "https://www.flickr.com/search/?text=robot&license=2%2C3%2C4%2C5%2C6%2C9");
                googImages = ui.link("googleimages", "https://www.google.com/search?q=robot&tbs=sur:fmc&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwjgy8-f95jLAhWI7hoKHV_UD00QsAQIMQ&biw=1265&bih=1359");
                ui.say(" - " + flickr);
                ui.say(" - " + googImages);
                ui.say("");
                return [4 /*yield*/, ui.pause(1)];
            case 3:
                _a.sent();
                common_setup_1.noteAboutClickingLinks(ui, state);
                return [4 /*yield*/, ui.pause(1)];
            case 4:
                _a.sent();
                if (state.isAnOSSRepo) {
                    ui.say(state.botName + " does not need privileged access to your repo or org. This is because Danger will only");
                    ui.say("be writing comments, and you do not need special access for that.");
                }
                else {
                    ui.say(state.botName + " will need access to your repo. Simply because the code is not available for the public");
                    ui.say("to read and comment on.");
                }
                return [4 /*yield*/, ui.pause(1)];
            case 5:
                _a.sent();
                ui.say("\nCool, please press return when you have your account ready (and you've verified the email...)");
                ui.waitForReturn();
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=setup-bot-account.js.map