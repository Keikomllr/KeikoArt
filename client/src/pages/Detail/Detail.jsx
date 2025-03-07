import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import "../../App.css";
import "../../components/Header/Header.css";


function Detail() {

    let params = useParams();

    const [product, setProduct] = useState(null); 

    useEffect(() => {
        fetch(`/api/artworks/${params.id}`)
        .then((resp) => resp.json())
        .then((product) => {
            setProduct(product);
        });
    }, []);
    return product ? (
        <>
        <div className="header-container">
                <Header />
        </div>
        <main className="flex flex-row p-10">
            <div>
                <img src={product.image} alt="" />
            </div>    
            <div>
                <h1 className="text-4xl font-bold">Title: {product.title}</h1>
                <p>Year: {product.year}</p>
                <p>Size: {product.size}</p>
                <p>Materials: {product.material}</p>
                <p>Price: {product.price} SEK</p>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
            </div>    
        </main>


        </>
    ) : "Loading...";
    
}

export default Detail;
