const clipboardy = require("clipboardy");

// クリップボードの改行を削除する
const readCb = clipboardy.readSync();
clipboardy.writeSync(readCb.replace(/\r?\n|\r/g, ""));
