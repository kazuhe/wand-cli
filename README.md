<br>

<p align="center">
<b>Wand CLI is Node.js CLI memo tool 🧙✨</b> 
</p>

<p align="center">
<a href="https://www.npmjs.com/package/wand-cli"><img src="https://img.shields.io/npm/v/wand-cli.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/wand-cli"><img src="https://img.shields.io/npm/l/wand-cli.svg" alt="Package License" /></a>
</p>

<br>

# wand-cli
Node.js CLI memo tool

## Usage

### Installation
`npx`でWand CLIを実行するために`-g`オプションを使用してライブラリをグローバルにインストールします。
```bash
$ npm i -g wand-cli
```

### Basic workflow
インストールが完了すると`wand`コマンドを呼び出すことができます。
次のように入力して使用可能なコマンドを確認してください。
```bash
$ npx wand --help
```


まずは初期設定でメモを管理するためのリモートリポジトリのURLを登録します。  
下記コマンドを実行すると、対話形式でURLを求められるので入力してください。内部的には`git clone`を行っており、成功するとユーザーのホームディレクトリ直下に`/wand`ディレクトリが作成されます。
```bash
$ npx wand init
```

## License
MIT License © 2021 [kazuhe](https://github.com/kazuhe)
