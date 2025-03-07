const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;

const db = new Database("./db/artworks.db", {
    verbose: console.log, // SQL コマンドをコンソールで確認
});

const app = express();

app.use(express.json()); //これがないと、フロントエンドから POST されたデータを req.body で受け取れない！Convert javascript object(Frontend) to JSON(backend). 

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

app.post("/api/artworks", (req, res) => {
    console.log("Received data:", req.body); // データを確認する

    const {
        title,
        size,
        year,
        material,
        price,
        description, 
        category,
        image,
        image2,
        availability, 
        for_sale 
    } = req.body;
    

    const product = { 
        title: title || "", 
        size: size || "", 
        year: Number(year) || null,  // 数字に変換（失敗したら null）
        material: material || "", 
        price: price ? Number(price) : null,  
        description: description || "", 
        category: Array.isArray(category) ? category.join(", ") : category || "", // 🔥 修正
        image: image || "", 
        image2: image2 || null, // 🔥 空文字を null に変換
        availability: availability ? 1 : 0, 
        for_sale: for_sale ? 1 : 0
    };

    const insert = db.prepare(`
        INSERT INTO artworks (
        title,
        size,
        year,
        material,
        price,
        description, 
        category,
        image,
        image2,
        availability,
        for_sale
      ) VALUES (
        @title,
        @size,
        @year,
        @material,
        @price,
        @description, 
        @category,
        @image,
        @image2,
        @availability, 
        @for_sale 
      )       
    `);

    insert.run(product);

    res.status(201).json({ message: "Artwork added successfully", product });
});    


// サーバー起動
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
