import { useEffect, useState } from "react";
import { useParams } from "react-router";


function Detail() {

    let params = useParams();

    const [product, setProduct] = useState(null); 

    useEffect(() => {
        fetch(`/api/artworks/${params.id}`)
        .then((resp) => resp.json())
        .then((product) => {
            console.log(product);
        });
    }, []);



    return product ? (
        <>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />

        </>
    ) : "Loading...";
    
}

export default Detail;