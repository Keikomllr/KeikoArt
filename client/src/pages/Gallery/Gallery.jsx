import{ useState, useEffect } from "react";


const Gallery = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/artworks')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
    },[]);

    return(
        <main>
            <h1 className="text-4xl bold text-center p-4">Gallery</h1>
            <div className="grid grid-cols-4 items-center">
                {products.map((product) => (
                    <div key={product.id}>                        
                        <img src={product.image} alt="" />
                    </div>
                ))}
            </div>
        </main>
    )

}


export default Gallery;