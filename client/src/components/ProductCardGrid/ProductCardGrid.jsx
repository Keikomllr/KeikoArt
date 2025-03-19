import { Link } from "react-router";

  
  const ProductCardGrid = ( { headline, products } ) => {

  return (
   
      <section className="productCardGrid">
        <h2 className="text-center p-5 text-3xl font-bold product-headline">
          {headline}
        </h2>
        <div className="product-card-container relative">
          {products.map((product) => (
            <div key={product.id} className="product-card">  
                {/* Need "KEY" for Unique ID in div element, otherwise it will get error. */}
              <Link to={`/artworks/${product.id}`}>  
                <img src={product.image} alt="" />
                <h3 className="product-name">{product.title}</h3>
              </Link>
              <img src="/img/new3.png" alt="new_icon" className="absolute top-8  w-12 m-2"/>
            </div>     
          ))}    

        </div>
      </section>
   
  );
};

export default ProductCardGrid;
