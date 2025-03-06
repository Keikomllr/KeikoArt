const Category = ( { headline, categories } ) => {
    
    return (

        <section className="productCardGrid">
            <h2 className="text-center p-5 text-3xl font-bold category-headline">
                {headline}
            </h2>
            <div className="category-container">
            {categories?.map((category) => (
                <div key={category.id} className="block justify-center category">
                    <div>  
                        <img src={category.image} alt="" className="item-center"/>
                    </div>
                    <div>
                        <h3 className="text-center text-lg font-medium mt-2">
                        {category.title}</h3>
                        </div>    
                </div>
            ))
            }   
            </div> 
        </section> 
    );
};

export default Category;