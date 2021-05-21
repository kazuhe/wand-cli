"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
exports.default = (name, callback) => {
    // TODO: 特定のファイル（.git等）が存在する場合は早期リターン
    child_process_1.exec(`git clone ${name}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`[exec error]: ${error}`);
            callback(error, 'リポジトリのcloneに失敗しました');
            return;
        }
        callback(null, 'リポジトリのcloneに成功しました');
        console.log(`[stdout]: ${stdout}`);
        console.error(`[stderr]: ${stderr}`);
    });
};
