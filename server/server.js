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

app.get("/api/artworks/slug/:slug", (req, res) => {
    const productSlug = req.params.slug;

    const product = db.prepare('SELECT * FROM artworks WHERE slug = ?').get(productSlug);
    
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
        slug,
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
        slug: slug || "", 
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
        slug,
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
        @slug,
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

// 🔍 SQLite の検索 API
app.get("/api/search", (req, res) => {
    const query = req.query.q; // フロントエンドからの検索ワード
    try {
      const stmt = db.prepare("SELECT * FROM artworks WHERE title LIKE ?");
      const results = stmt.all(`%${query}%`); // 🔥 部分一致検索（LIKE を使用）
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "検索エラー", error });
    }
  });

// サーバー起動
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
