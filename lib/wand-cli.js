"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const marked_1 = __importDefault(require("marked"));
const get_repository_1 = __importDefault(require("./modules/get_repository"));
const helper_readline_1 = require("./modules/helper_readline");
const TARGET_DIR = os_1.default.homedir() + '/wand-cli/';
// If the repository does not exist in the user's home directory
if (!fs_1.default.existsSync(TARGET_DIR)) {
    helper_readline_1.question('リポジトリのURLを入力してください > ').then((repo) => {
        get_repository_1.default(repo, TARGET_DIR);
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
}
else {
    console.log('The repository already exist!');
}
// import program from 'commander'
// // コマンドライン引数を取得し扱い易い形式にパース
// program.parse(process.argv)
// const filePath = program.args[0]
// console.log(process.argv)
// console.log(filePath)
