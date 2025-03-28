import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
function NewArtwork () {
    const navigate = useNavigate();

    const [ formData, setFormData] = useState({
        title: "",
        slug: "",
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

        event.preventDefault(); 

        fetch("/api/artworks", {  // APIエンドポイントにデータを送信
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) // `formData` を JSON 形式に変換して送信
        })
        .then(resp => {
            if(resp.ok){
                //skicka till startsidan
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

    // **`CHECKBOX for availability`and `for_sale` **
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setFormData({
            ...formData,
            [name]: checked
        });
    };

    return (
        <>
            <img src="/img/keikoicon1.png" alt="" className="header-icon  w-20 absolute inset-x-6 top-7"/>
            <Link to="/">
            <h1 className="flex items-center justify-center bg-gray-200 p-10 text-4xl font-bold shadow-lg">
                Administration
            </h1>
            </Link>

            <div className="min-h-screen flex items-center justify-center text-white p-10">
                <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">New Artwork</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-xl font-medium">
                                Title
                            </label>
                            <input 
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange} 
                            className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter title"
                            />
                        </div> 

                        <div>
                            <label htmlFor="slug" className="block text-xl font-medium">
                                URL slug
                            </label>
                            <input 
                            type="text"
                            id="slug"
                            name="slug"
                            value={formData.slug}
                            onChange={handleInputChange} 
                            className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Enter URL slug"
                            />
                        </div>       
                        
                        <div>
                            <label htmlFor="size" className="block text-xl font-medium">
                                size
                            </label>
                            <input 
                                type="text"
                                id="size"
                                name="size"
                                value={formData.size}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter size" 
                            />
                        </div>
                        <div>
                            <label htmlFor="year" className="block text-xl font-medium">
                                Year
                            </label>
                            <input 
                                type="text"
                                id="year"
                                name="year"
                                value={formData.year}
                                onChange={handleInputChange} 
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter year"
                            />
                        </div>
                        <div>
                            <label htmlFor="material" className="block text-xl font-medium">
                                Material
                            </label>
                            <input 
                                type="text"
                                id="material"
                                name="material"
                                value={formData.material}
                                onChange={handleInputChange} 
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter material"
                            />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-xl font-medium">
                                Price (SEK)
                            </label>
                            <input 
                                type="text"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleInputChange} 
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter price"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-xl font-medium">
                                Description
                            </label>
                            <textarea 
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange} 
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-32"
                                placeholder="Write description here..."
                            />
                        </div>
                        <div>
                        <label className="block text-xl font-medium mb-2">Category</label>
                            <div className="flex flex-wrap gap-4">
                                {["Watercolor", "Digital", "Drawing", "Sculpture", "Canvas"].map((category) => (
                                <label key={category} className="flex items-center space-x-2">
                                    <input 
                                    type="checkbox"
                                    value={category}
                                    checked={formData.category.includes(category)}
                                    onChange={handleCategoryChange}
                                    className="w-4 h-4 accent-blue-500"
                                    />
                                    <span>{category}</span>
                                </label>
                            ))}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-xl font-medium">Image</label>
                            <input 
                                type="text"
                                id="image"
                                name="image"
                                value={formData.image}
                                onChange={handleInputChange} 
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter image URL"
                            />
                        </div>
                        <div>
                            <label htmlFor="image2" className="block text-xl font-medium">Image2 (optional)</label>
                            <input 
                                type="text"
                                id="image2"
                                name="image2"
                                value={formData.image2}
                                onChange={handleInputChange}
                                className="w-full p-3 mt-1 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Enter image URL" 
                            />
                        </div>
                        <div>
                            <label htmlFor="availability" className="block text-xl font-medium">
                                Availability
                            </label>
                            <input 
                                type="checkbox"
                                id="availability"
                                name="availability"
                                value={formData.availability}
                                onChange={handleCheckboxChange} 
                            />
                            <span>  Yes, this is available.</span>
                        </div>
                        <div>
                            <label htmlFor="for_sale" className="block text-xl font-medium">
                                For Sale
                            </label>
                            <input 
                                type="checkbox"
                                id="for_sale"
                                name="for_sale"
                                value={formData.for_sale}
                                onChange={handleCheckboxChange} 
                            />
                            <span>  Yes, this is for sale.</span>
                        </div>
                        <button type="submit" className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200">
                            Submit
                        </button>
                    </form>
                
                    <button 
                        onClick={() => navigate("/admin/artworks_list")}
                        className="w-full py-3 mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg transition duration-200">
                            Go back to list
                    </button>
                
                </div>
            </div>    
        </>
    );
}



export default NewArtwork;