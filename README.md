<br>

<p align="center">
<b>Wand CLI is Node.js CLI memo tool ð§â¨</b> 
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
`npx`ã§Wand CLIãå®è¡ããããã«`-g`ãªãã·ã§ã³ãä½¿ç¨ãã¦ã©ã¤ãã©ãªãã°ã­ã¼ãã«ã«ã¤ã³ã¹ãã¼ã«ãã¾ãã
```bash
$ npm i -g wand-cli
```

### Basic workflow
ã¤ã³ã¹ãã¼ã«ãå®äºããã¨`wand`ã³ãã³ããå¼ã³åºããã¨ãã§ãã¾ãã
æ¬¡ã®ããã«å¥åãã¦ä½¿ç¨å¯è½ãªã³ãã³ããç¢ºèªãã¦ãã ããã
```bash
$ npx wand --help
```

ã¾ãã¯ã¡ã¢ãç®¡çããããã®ãªã¢ã¼ããªãã¸ããªã®URLãç»é²ãã¾ãã  
ä¸è¨ã³ãã³ããå®è¡ããã¨ãå¯¾è©±å½¢å¼ã§URLãæ±ããããã®ã§å¥åãã¦ãã ãããåé¨çã«ã¯`git clone`ãè¡ã£ã¦ãããæåããã¨ã¦ã¼ã¶ã¼ã®ãã¼ã ãã£ã¬ã¯ããªç´ä¸ã«`/wand`ãã£ã¬ã¯ããªãä½æããã¾ãã
```bash
$ npx wand init
```

åæè¨­å®ãå®äºãããä¸è¨ã®ã³ãã³ãã§æ°ããã¡ã¢ãä½æãã¦ã¿ã¾ãããã  
å¯¾è©±å½¢å¼ã§ã¡ã¢ã®ãã¡ã¤ã«åãèããã¾ããç¹ã«æå®ããªãå ´åã¯ã¨ã³ã¿ã¼ãæ¼ãã¦ãã ãããã©ã³ãã ãªæå­åã®`.md`ãã¡ã¤ã«ãä½æããã¾ãã
```bash
$ npx wand new
```

ä½æããã¡ã¢ãä¸è¦§è¡¨ç¤ºãããã¨ãã§ãã¾ãã
```bash
$ npx wand list
```

ç»é²ãã¦ãããªã¢ã¼ããªãã¸ããªã«å¤æ´åå®¹ãpushãã¾ãã
```bash
$ npx wand save
```

## Commadns
```
COMMANDS:
  wand init         Set up the repository and start Wand CLI.
  wand new          Create a new memo.
  wand list         Show the memo list.
  wand save         Save your changes and apply them to the remote repository.
  wand --help, -h   Show help.
```

## Prerequisites
â ï¸ åæã¨ãã¦ãgitã³ãã³ããã®ãã®ãå©ç¨ã§ããç°å¢ã§ããå¿è¦ãããã¾ãã  

## License
MIT License Â© 2021 [kazuhe](https://github.com/kazuhe)
