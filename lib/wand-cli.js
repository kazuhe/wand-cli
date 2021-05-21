"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const marked_1 = __importDefault(require("marked"));
const get_repository_1 = __importDefault(require("./modules/get_repository"));
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('リポジトリのURLを入力してください > ', (name) => {
    console.log('cloneしています...');
    get_repository_1.default(name, (err, result) => {
        if (err) {
            console.log(result);
            return;
        }
        // TODO: memoのmdファイルを取得、無ければ作成
        const filePath = './README.md';
        fs_1.default.readFile(filePath, { encoding: 'utf8' }, (err, file) => {
            if (err) {
                console.log('[Error]', err.message);
                process.exit(1);
            }
            // Markdownをhtmlに変換
            const html = marked_1.default(file);
            console.log('[Sucess]', html);
        });
    });
    rl.close();
});
// import program from 'commander'
// // コマンドライン引数を取得し扱い易い形式にパース
// program.parse(process.argv)
// const filePath = program.args[0]
// console.log(process.argv)
// console.log(filePath)
