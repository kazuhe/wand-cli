"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const colors_1 = __importDefault(require("colors"));
exports.default = (name, target) => {
    console.log(colors_1.default.dim('Cloning...'));
    child_process_1.exec(`git clone ${name} ${target}`, (error) => {
        if (error) {
            console.error(colors_1.default.bgRed.black('Failed') + ' Repository clone failed');
            throw new Error(error.toString());
        }
        console.error(colors_1.default.bgGreen.black('Success') + ` 🎉 Clone repository! ${name}`);
    });
};
