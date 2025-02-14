
  
  const ProductCardGrid = ( { headline, products } ) => {

  return (
   
      <section className="productCardGrid">
        <h2 className="product-headline">{headline}</h2>
        <div className="product-card-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">  
                {/* Need "KEY" for Unique ID in div element, otherwise it will get error. */}
              <img src={product.image} alt="" />
              <h3 className="product-name">{product.name}</h3>
            </div>     

          ))}    

          {/* Doesnt need to write these codes below. Instead, you use map function above. And each objects are written in App.jsx
          <div className="product-card">
            <img src="/img/starboy.jpg" alt="" />
            <h3 className="product-name">Star Boy</h3>
          </div>

          <div className="product-card">
            <img src="/img/snowdrops.jpg" alt="" />
            <h3 className="product-name">Snow Drops</h3>
          </div>*/}
        </div>
      </section>
   
  );
};

export default ProductCardGrid;
