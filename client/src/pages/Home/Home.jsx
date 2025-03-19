import {useState, useEffect } from "react";
import Category from "../../components/Category/Category"
import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid";
import Hero from "../../components/Hero/Hero"; 
import Article from "../../components/Article/Article";
import "../../App.css";


const Home = () =>{

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/artworks')
    .then(response => response.json())
    .then(data => {
      setProducts(data);
    })
  },[]); 
    
    const hero = {
        video: "/videos/anythingnosounds.MP4",
        type: "video/mp4",
        buttonLabel: "View All",
        buttonLink: "/products/products",
        image: "/img/hero.jpg"
    };
    
      const categories = [
        { id:1, title: "Water Colors", image: "/img/moon.jpg"},
        { id:2, title: "Canvas", image: "/img/wolfgirl.jpg"},
        { id:3, title: "Drawings", image: "/img/emil.jpg"},
        { id:4, title: "Sculptures", image: "/img/morimori3d.jpg"},
        { id:5, title: "Degitals", image: "/img/sunaonna.jpg"},
      ];
    
      const articles = [
        { id:1, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/deergirl.MP4", type: "video/mp4", name: "Deer Girl"},
        { id:2, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/tanpopo.MP4", type: "video/mp4", name: "Dandelions"},
        { id:3, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/fuji.MP4", type: "video/mp4", name: "Mt. FUJI"},
      ];

      return (
        <>
            <Hero hero={hero} />
            <Category headline="Categories" categories={categories} />  
            <ProductCardGrid headline="New In" products={products} />
            <Article headline="Videos" articles={articles} />
        </>
    );
};

export default Home;