import { useState } from "react";

function NewArtwork () {

    const [ formData, setFormData] = useState({
        title: "",
        size: "",
        year: "",
        material: "",
        price: "",
        description: "",
        category: [],  //CHECKBOX
        image: "",
        image2: "",
        availability: false,  //BOOLEAN
        for_sale: false  //BOOLEAN
    })

    const handleSubmit = (event) => {

        event.preventDefault(); // フォーム送信時のページリロードを防ぐ

        fetch("/api/artworks", {  // APIエンドポイントにデータを送信
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) // `formData` を JSON 形式に変換して送信
        })
        .then(resp => {
            if(resp.ok){
                // TODO skicka till startsidan
                alert("Added a new artwork!" 
                ) // 成功したらアラートを表示
            }
        })
    }

    const handleInputChange = (event) => {

        const { name, value } = event.target; // 入力フィールドの name と value を取得

        setFormData({
            ...formData,   // 既存のデータを維持
            [name]: value  // 変更されたフィールドのみ更新
        });
    }

    // **カテゴリ（複数選択）のチェックボックス処理**
    const handleCategoryChange = (event) => {
        const { value, checked } = event.target;

        if(checked)
        {
            setFormData({
                ...formData,
                category: [...formData.category, value]
            });
        } else {
            // チェックが外れたら削除
            setFormData({
                ...formData,
                category: formData.category.filter((cat) => cat !== value)
            });
        }
    };

    // **`availability` と `for_sale` のチェックボックス処理**
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    return (
        <>
            <h1 className=" bg-gray-200 p-10 text-5xl font-bold shadow-lg">Administration</h1>

            <h2 className="p-5 text-3xl font-bold">New Artwork</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="p-5 text-xl font-bold .flex-col ">
                    <div>
                        <label htmlFor="title">Title</label>
                    </div>    
                    <div>
                        <input 
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange} 
                        className="bg-gray-50 border border-gray-500 max-w-md rounded"
                        />
                    </div>    
                </div>
                <div>
                    <label htmlFor="size">size</label>
                    <input 
                        type="text"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input 
                        type="text"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="material">Material</label>
                    <input 
                        type="text"
                        id="material"
                        name="material"
                        value={formData.material}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input 
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label>Category</label><br />
                    {["Watercolor", "Degital", "Drawing", "Sculpture", "Canvas"].map((category) => (
                        <label key={category}>
                            <input 
                                type="checkbox"
                                value={category}
                                checked={formData.category.includes(category)}
                                onChange={handleCategoryChange} 
                            />
                            {category}
                        </label>
                    ))}
                </div>

                <div>
                    <label htmlFor="image">Image</label>
                    <input 
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="image2">Image2 (optional)</label>
                    <input 
                        type="text"
                        id="image2"
                        name="image2"
                        value={formData.image2}
                        onChange={handleInputChange} 
                        />
                </div>
                <div>
                    <label htmlFor="availability">Availability</label>
                    <input 
                        type="checkbox"
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleCheckboxChange} 
                        />
                </div>
                <div>
                    <label htmlFor="for_sale">For Sale</label>
                    <input 
                        type="checkbox"
                        id="for_sale"
                        name="for_sale"
                        value={formData.for_sale}
                        onChange={handleCheckboxChange} 
                        />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}



export default NewArtwork;