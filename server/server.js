const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;

const db = new Database("./db/artworks.db", {
    verbose: console.log, // SQL コマンドをコンソールで確認
});

const app = express();

// GET /api/artworks
app.get("/api/artworks", (req, res) => {
    // SQL クエリを正しく記述
    const select = db.prepare("SELECT id, title, image FROM artworks");
    const products = select.all(); // データを取得

    res.json(products); // 変数名を統一
});

// サーバー起動
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
