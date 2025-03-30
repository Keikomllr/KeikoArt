const express = require("express");
const Database = require("better-sqlite3");
const port = 8000;

const db = new Database("./db/artworks.db", {
    verbose: console.log, 
});

const app = express();

app.use(express.json()); 

// GET /api/artworks
app.get("/api/artworks", (req, res) => {
    const select = db.prepare("SELECT * FROM artworks");
    const products = select.all(); 

    res.json(products); 
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
    console.log("Received data:", req.body); 

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
        year: Number(year) || null,  
        material: material || "", 
        price: price ? Number(price) : null,  
        description: description || "", 
        category: Array.isArray(category) ? category.join(", ") : category || "", 
        image: image || "", 
        image2: image2 || null, 
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

//SQLite SEARCH API
app.get("/api/search", (req, res) => {
    const query = req.query.q; // Search keyword
    try {
      const stmt = db.prepare("SELECT * FROM artworks WHERE title LIKE ?");
      const results = stmt.all(`%${query}%`); // （Using LIKE）
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Searching error", error });
    }
  });


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
