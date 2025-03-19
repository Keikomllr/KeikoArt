import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Similar = ({ headline, category, products = [] }) => { // ✅ デフォルト値を `[]` に設定
    const similarProducts = products.filter(
      (item) => item.category === category
    );// ✅ カテゴリーが同じ商品をフィルタリング

    // ✅ ランダムにシャッフルする関数
    const shuffleArray = (array) => {
        return array
          .map((item) => ({ item, sort: Math.random() })) // ランダムな値を割り当て
          .sort((a, b) => a.sort - b.sort) // その値でソート
          .map(({ item }) => item); // 元のオブジェクトの配列に戻す
      };
    
      const randomProducts = shuffleArray(similarProducts); // ✅ ランダム化
    
      // ✅ スライダーの設定
      const settings = {
        dots: true, // 下にドットのナビゲーションを表示
        infinite: true, // 無限ループ
        speed: 500, // 切り替え速度
        slidesToShow: 3, // ✅ 3つずつ表示
        slidesToScroll: 3, // ✅ 3つずつスライド
        autoplay: true, // 自動再生
        autoplaySpeed: 3000, // 3秒ごとにスライド
        arrows: true, // 次へ・前へボタン
      };

return ( 
        <section className="p-10 hidden sm:block"> 
            <h2 className="text-2xl font-bold mb-4 text-center">{headline}</h2>
                <Slider {...settings}>
                    {randomProducts.length > 0 ? (
                    randomProducts.map((product) => (
                        <div key={product.id} className="p-4">
                            <div className="border p-4 rounded shadow">
                                <img src={product.image} alt={product.title} className="w-full h-auto"/>
                                <h3 className="text-lg font-bold mt-2">{product.title}</h3>
                                <p>{product.price} SEK</p>
                            </div>
                        </div>
                    ))
                    ) : (
                    <p>No similar artworks found.</p>
                    )}
                </Slider>

        </section>
    );
};

export default Similar;