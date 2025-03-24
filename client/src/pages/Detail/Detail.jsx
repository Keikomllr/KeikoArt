import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../App.css";
import Similar from "../../components/Similar/Similar";



function Detail() {

    const{ slug } = useParams(); //Get slug

    const [product, setProduct] = useState(null); 
    const [products, setProducts] = useState([]); // ✅ 追加: 全商品のデータを管理
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {   // 単体商品のデータ取得
        fetch(`/api/artworks/slug/${slug}`)
        .then((resp) => resp.json())
        .then((product) => {
            setProduct(product);
        });

    // ✅ 全商品のデータを取得して、類似商品のフィルタリングに使う
    fetch(`/api/artworks`)
    .then((resp) => resp.json())
    .then((data) => {
        setProducts(data);
    });

  }, [slug]); // ✅ slugを依存にして、ページが変わるたびに再取得


    // 類似商品をフィルター
    useEffect(() => {
        if (product && products.length > 0) {
        const filtered = products.filter(
            (item) => item.category === product.category && item.id !== product.id
        );
        setSimilarProducts(filtered);
        }
  }, [product, products]);



  return product ? (
        <>
        <main className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 p-10 border rounded shadow m-4 w-auto">
            <div>
                <img src={product.image} alt="" className="w-full"/>
            </div>    
            <div className="p-6">
                <h1 className="text-4xl font-bold py-4">{product.title}</h1>
                <p className="text-2xl py-4">{product.year}</p>
                <p className="text-xl">{product.size}</p>
                <p className="text-xl font-semibold text-blue-400 py-1 ">Original</p>
                <p className="text-xl py-1">{product.material}</p>
                <p className="text-2xl font-bold py-1">{product.price} SEK</p>
                <form method="post" action="/basket" className="flex items-center gap-4">
                    <input type="hidden" name="productId" value={product.id}></input>
                    <button className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded flex-1 max-w-80 mt-3">
                        Add to cart
                    </button>
                    <img src="/img/heart.png" alt="favorite_icon" className="w-8 h-8 cursor-pointer" />
                </form>
                <br />
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Taxes and shipping included</p>
            </div>    
        </main>

        <Similar
        headline="Similar Artwork"
        products={similarProducts}
        category={product.category} 
        />
                
        </>
    ) : "Loading...";
    
}

export default Detail;
