import { Link } from "react-router";

  
  const ProductCardGrid = ( { headline, products, maxDisplay = 8 } ) => {

  return (
   
      <section className="productCardGrid">
        <h2 className="text-center p-5 text-3xl font-bold product-headline">
          {headline}
        </h2>
        <div className="product-card-container relative">
          {products.slice(0,maxDisplay).map((product) => (
            <div key={product.id} className="product-card rounded shadow p-4">  
                {/* Need "KEY" for Unique ID in div element, otherwise it will get error. */}
              <Link to={`/artworks/${product.slug}`}>  
                <img src={product.image} alt="" />
                <div className="mt-1 flex justify-between mx-auto"> 
                  <h3 className="text-1xl font-bold">{product.title}</h3>
                  <img src="/img/heart.png" alt="favorite_icon" className="h-6 w-6"/>
                </div>
                <div>
                  <p className="">{product.price} SEK</p>
                </div>
              </Link>
              <img src="/img/new3.png" alt="new_icon" className="absolute top-8  w-12 m-2"/>
            </div>     
          ))}    

        </div>
      </section>
   
  );
};

export default ProductCardGrid;
