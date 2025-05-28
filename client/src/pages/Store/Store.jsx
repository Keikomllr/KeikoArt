import { useState, useEffect } from "react";
import { Link } from "react-router";

const Store = () => {

const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);

useEffect(() =>{
  fetch(`${import.meta.env.VITE_API_URL}/api/artworks`)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            setFilteredProducts(data);
        })
    },[]);
    
    const handleChangeCategory = (event) => {
        const category = event.target.value;
    
        if (category === "all") {
          setFilteredProducts(products);
        } else {
          const filteredProducts = products.filter((product) => product.category === category);
          setFilteredProducts(filteredProducts);
        }
      };

return(
  <>
   <h1 className="text-4xl font-bold text-center p-8"> 
    Store
   </h1>
      <select onChange={handleChangeCategory} className="text-xl font-semibold p-2 mx-auto ml-5 mb-2 border rounded shadow text-green-700">
        <option value="all">All Categories</option>
        <option value="Watercolor">WaterColor</option>
        <option value="Canvas">Canvas</option>
        <option value="Drawing">Drawing</option>
        <option value="Digital">Digital</option>
        <option value="Sculpture">Sculpture</option>
      </select>

   <main>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {filteredProducts.map((product) => (
        <div key={product.id} className="product-card rounded shadow p-4">  
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
        </div>     
        ))}
    </div>
   </main>
  </>

);
};


export default Store;