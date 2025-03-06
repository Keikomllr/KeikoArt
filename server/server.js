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
    const select = db.prepare("SELECT * FROM artworks");
    const products = select.all(); // データを取得

    res.json(products); // 変数名を統一
});

app.get("/api/artworks/:id", (req, res) => {
    const productId = req.params.id;

    const product = db.prepare('SELECT * FROM artworks WHERE id = ?').get(productId);
    
    if (!product) {
        res.status(404).send();
        return;
      }
    
      res.json(product);
    });


// サーバー起動
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
