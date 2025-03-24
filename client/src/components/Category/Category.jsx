import { useNavigate } from "react-router-dom";
import styled from "styled-components";

/* ----CATEGORY STYLED----- */
const CategoryContainer = styled.div`
    display:flex;
    display:flex-row;
    padding: 4px;
`;
  
const CategoryContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 15px;
  `;
  
const CategoryImage = styled.img`
    width: 100%;
    min-width:150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  `;

const Category = ( { headline, categories } ) => {

    const navigate = useNavigate();

    return (

        <section>
            <h2 className="text-center p-5 text-3xl font-bold">
                {headline}
            </h2>
            <CategoryContainer className="overflow-x-auto whitespace-nowrap scrollbar-hide">
              {categories?.map((category) => (
                <CategoryContainer2 
                onClick={() => navigate(category.url)}
                key={category.id} className="block justify-center cursor-pointer">
                    <div>  
                        <CategoryImage src={category.image} alt="" className="item-center"/>
                    </div>
                    <div>
                        <h3 className="text-center text-lg font-medium mt-2">
                        {category.title}</h3>
                        </div>    
                </CategoryContainer2>
            ))
            }   
            </CategoryContainer> 
        </section> 
    );
};

export default Category;