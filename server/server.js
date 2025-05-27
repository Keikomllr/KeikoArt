const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const port = process.env.PORT || 8000;

const db = new sqlite3.Database("./db/artworks.db", (err) => {
  if (err) {
    console.error("Failed to connect to database:", err);
  } else {
    console.log("Connected to SQLite database.");
  }
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// GET /api/artworks
app.get("/api/artworks", (req, res) => {
  db.all("SELECT * FROM artworks", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get("/api/artworks/slug/:slug", (req, res) => {
  const slug = req.params.slug;
  db.get("SELECT * FROM artworks WHERE slug = ?", [slug], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).send();
    } else {
      res.json(row);
    }
  });
});

app.post("/api/artworks", (req, res) => {
  console.log("Received data:", req.body);

  const {
    title = "",
    slug = "",
    size = "",
    year = null,
    material = "",
    price = null,
    description = "",
    category = "",
    image = "",
    image2 = null,
    availability = 0,
    for_sale = 0
  } = req.body;

  const categories = Array.isArray(category) ? category.join(", ") : category;

  const query = `
    INSERT INTO artworks (
      title, slug, size, year, material, price,
      description, category, image, image2,
      availability, for_sale
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [
    title,
    slug,
    size,
    year,
    material,
    price,
    description,
    categories,
    image,
    image2,
    availability ? 1 : 0,
    for_sale ? 1 : 0
  ], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: "Artwork added successfully", id: this.lastID });
    }
  });
});

app.get("/api/search", (req, res) => {
  const query = req.query.q;
  db.all("SELECT * FROM artworks WHERE title LIKE ?", [`%${query}%`], (err, rows) => {
    if (err) {
      res.status(500).json({ message: "Searching error", error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
