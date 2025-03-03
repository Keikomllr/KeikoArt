import Header from "../components/Header/Header";
import ProductCardGrid from "../components/ProductCardGrid/ProductCardGrid";
import Hero from "../components/Hero/Hero"; 
import Article from "../components/Article/Article";
import "../App.css";
import "../components/Header/Header.css";

const Home = () =>{
    const hero = {
        video: "/videos/anythingnosounds.MP4",
        type: "video/mp4",
        buttonLabel: "View All",
        buttonLink: "/products/products",
        image: "/img/hero.jpg"
    };

const products = [];

    fetch("http://localhost:8000/api/artworks")
    .then(resp => resp.json())
    .then(products => {
      console.log(products);
    }); 

    // const products = [
    //     { id:1, name: "Star Tree", image: "/img/startree.jpg"},
    //     { id:2, name: "Fox Man", image: "/img/foxman.jpg"},
    //     { id:3, name: "Snow Drops", image: "/img/snowdrops.jpg"},
    //     { id:4, name: "Star boy", image: "/img/starboy.jpg"},
    //     { id:5, name: "Baby Rabbits", image: "/img/babyrabbits.jpg"},
    //   ];
    
      const productsCategories = [
        { id:1, name: "Water Colors", image: "/img/moon.jpg"},
        { id:2, name: "Canvas", image: "/img/wolfgirl.jpg"},
        { id:3, name: "Drawings", image: "/img/emil.jpg"},
        { id:4, name: "Sculptures", image: "/img/morimori3d.jpg"},
        { id:5, name: "Illustrations", image: "/img/sunaonna.jpg"},
      ];
    
      const articles = [
        { id:1, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/deergirl.MP4", type: "video/mp4", name: "Deer Girl"},
        { id:2, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/tanpopo.MP4", type: "video/mp4", name: "Dandelions"},
        { id:3, buttonLabel:"View More", buttonLink: "/blog", image: "/videos/fuji.MP4", type: "video/mp4", name: "Mt. FUJI"},
      ];

      return (
        <>
           <div className="header-container">
                <Header />
            </div>

            <Hero hero={hero} />

            <ProductCardGrid headline="Categories" products={productsCategories} />  
            <ProductCardGrid headline="Water Colors" products={products} />

            <Article headline="Videos" articles={articles} />

        </>
    );
};

export default Home;