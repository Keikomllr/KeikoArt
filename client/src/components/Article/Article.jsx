const Article = ( { headline, articles } ) => {
    return(
        <section className="article">
            <h1 className="text-center text-3xl font-bold">{headline}</h1>
            <div className="article-container">
             {articles.map((article) => (
                <div className="article-video" key={article.id}>
                    <h1 className="article-tilte">{article.title}</h1>
                    <video width="100%" autoPlay loop controls muted> 
                        <source src={article.image} type={article.type} />
                    </video>
                    <a href={article.buttonLink}>{article.buttonLabel}</a>
                </div>   
             ))}
             </div>
        </section>
    );
};

export default Article;