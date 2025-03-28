import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const Similar = ({ headline, category, products = [] }) => { 

    const similarProducts = products.filter(
      (item) => item.category === category
    ); //Filter by category

    // SHUFFLE 
    const shuffleArray = (array) => {
        return array
          .map((item) => ({ item, sort: Math.random() })) 
          .sort((a, b) => a.sort - b.sort) 
          .map(({ item }) => item); 
      };
    
      const randomProducts = shuffleArray(similarProducts); // MAKING RANDOM
    
      // SLIDER
      const settings = {
        dots: true, 
        infinite: true, // loop
        speed: 500, 
        slidesToShow: 3, 
        slidesToScroll: 3, 
        autoplay: true, 
        autoplaySpeed: 3000, 
        arrows: true, 
      };

return ( 
        <section className="p-10 hidden sm:block"> 
            <h2 className="text-2xl font-bold mb-4 text-center">{headline}</h2>
                <Slider {...settings}>
                    {randomProducts.length > 0 ? (
                    randomProducts.map((product) => (
                        <div key={product.id} className="p-4">
                            <Link to={`/artworks/${product.slug}`}>
                            <div className="border p-4 rounded shadow">
                                <img src={product.image} alt={product.title} className="w-full h-auto"/>
                                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                                <p>{product.price} SEK</p>
                            </div>
                            </Link>
                        </div>
                    ))
                    ) : (
                        <p>No similar artworks found.</p>
                    )}
                </Slider>

        </section>
    );
};

export default Similar;