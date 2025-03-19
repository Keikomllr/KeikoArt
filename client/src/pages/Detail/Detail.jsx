import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../../App.css";
import Similar from "../../components/Similar/Similar";



function Detail() {

    let params = useParams();

    const [product, setProduct] = useState(null); 
    const [products, setProducts] = useState([]); // ✅ 追加: 全商品のデータを管理

    useEffect(() => {   // 単体商品のデータ取得
        fetch(`/api/artworks/${params.id}`)
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

}, [params.id]); // ✅ params.id を依存にして、ページが変わるたびに再取得

    return product ? (
        <>
        <main className="max-w-10xl mx-auto flex  flex-col md:flex-row p-10 border rounded shadow m-4 w-auto">
            <div>
                <img src={product.image} alt="" />
            </div>    
            <div className="p-6">
                <h1 className="text-4xl font-bold py-4">{product.title}</h1>
                <p className="text-2xl py-2">{product.year}</p>
                <p className="text-xl">{product.size}</p>
                <p className="text-xl py-1">{product.material}</p>
                <p className="text-2xl font-bold py-1">{product.price} SEK</p>
                <form method="post" action="/basket" className="flex items-center gap-4">
                    <input type="hidden" name="productId" value={product.id}></input>
                    <button className="bg-transparent hover:bg-blue-400 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded flex-1">
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

        {/* ✅ 類似商品セクションを表示 */}
        <Similar headline="Similar Artwork" category={product.category} products={products} />
        </>
    ) : "Loading...";
    
}

export default Detail;
