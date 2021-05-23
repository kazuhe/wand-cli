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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirm = exports.question = void 0;
const readline_1 = __importDefault(require("readline"));
const colors_1 = __importDefault(require("colors"));
/**
 * Ask questions on the command line
 */
const question = (question) => {
    const rl = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question('\n' + colors_1.default.dim(question), (answer) => {
            resolve(answer);
            rl.close();
        });
    });
};
exports.question = question;
/**
 * Ask questions that can be answered with Yes / No
 */
const confirm = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const answer = yield exports.question(`${msg}(y/n): `);
    return answer.trim().toLowerCase() === 'y';
});
exports.confirm = confirm;
