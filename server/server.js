const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());

// 🔹 JSONファイルのパス
const dataFilePath = path.join(__dirname, "db", "artworks.json");

// 🔹 TOPページ
app.get("/", (req, res) => {
  res.send("Hello from JSON-based server!");
});

// 🔹 すべてのアート作品を取得
app.get("/api/artworks", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "読み込みエラー" });
    const artworks = JSON.parse(data);
    res.json(artworks);
  });
});

// 🔹 slugで個別取得
app.get("/api/artworks/slug/:slug", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "読み込みエラー" });
    const artworks = JSON.parse(data);
    const product = artworks.find(a => a.slug === req.params.slug);
    if (!product) return res.status(404).send();
    res.json(product);
  });
});

// 🔹 検索API（titleに含まれる文字）
app.get("/api/search", (req, res) => {
  const query = req.query.q?.toLowerCase();
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "読み込みエラー" });
    const artworks = JSON.parse(data);
    const results = artworks.filter(a =>
      a.title.toLowerCase().includes(query)
    );
    res.json(results);
  });
});

// 🔹 新しいアート作品を追加（保存は簡易的）
app.post("/api/artworks", (req, res) => {
  fs.readFile(dataFilePath, "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "読み込みエラー" });
    const artworks = JSON.parse(data);
    const newArtwork = { id: Date.now(), ...req.body };
    artworks.push(newArtwork);
    fs.writeFile(dataFilePath, JSON.stringify(artworks, null, 2), err => {
      if (err) return res.status(500).json({ error: "保存エラー" });
      res.status(201).json({ message: "Artwork added!", product: newArtwork });
    });
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${port}`);
});
