import { useState, useEffect } from "react";
import { Link } from "react-router";

const Article = ( { headline, articles } ) => {
    
    const [displayedVideos, setDisplayedVideos] = useState([]);
    
    useEffect(() => {
      const updateVideos = () => {
        setDisplayedVideos(window.innerWidth < 640 ? articles.slice(0, 1) : articles);
      };

      updateVideos();
      window.addEventListener("resize", updateVideos)

      return () => window.removeEventListener("resize", updateVideos);
    }, [articles]);
    
    
    return(
        <section className="article w-full mx-auto p-4">
            <h1 className="text-center text-3xl font-bold p-5">{headline}</h1>
            <div className={`grid grid-cols-1 ${displayedVideos.length > 1 ? "sm:grid-cols-3" : ""} gap-4`}>
             {displayedVideos.map((article, index) => (
                <div className="article-video" key={index}>
                    <h1 className="article-tilte">{article.title}</h1>
                    <video width="100%" autoPlay loop controls muted> 
                        <source src={article.image} type={article.type} />
                    </video>
                    <Link to={article.buttonLink}>{article.buttonLabel}</Link>
                </div>   
             ))}
             </div>
        </section>
    );
};

export default Article;