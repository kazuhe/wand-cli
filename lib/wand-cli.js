"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const commander_1 = __importDefault(require("commander"));
const marked_1 = __importDefault(require("marked"));
console.log('hello!');
// コマンドライン引数を取得し扱い易い形式にパース
commander_1.default.parse(process.argv);
const filePath = commander_1.default.args[0];
console.log(process.argv);
console.log(filePath);
fs_1.default.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
    if (err) {
        console.log('[Error]', err.message);
        process.exit(1);
        return;
    }
    // Markdownをhtmlに変換
    const html = marked_1.default(file);
    console.log('[Sucess]', html);
});
