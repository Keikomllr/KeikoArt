import{ useState, useEffect } from "react";


const Gallery = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/artworks`)
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        })
    },[]);

    return(
        <main>
            <h1 className="text-4xl font-bold text-center p-8">Gallery</h1>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-0">
                {products.map((product) => (
                    <div key={product.id} className="w-full overflow-hidden">                        
                        <img src={product.image} alt="" className="w-full h-full object-cover block"/>
                    </div>
                ))}
            </div>
        </main>
    )

}


export default Gallery;