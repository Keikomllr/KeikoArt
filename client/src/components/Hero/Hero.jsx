const Hero = ({ hero }) => {
    return(
      <section className="hero">
        <div className="hero-container">
          <div>
            <video autoPlay loop muted>
              <source src={hero.video} type={hero.type} />
            </video>
          </div> 
          <div className="hero-wide-img"> 
            <img src={hero.image} alt={hero.title} />
            <a className="shop-now-button hero-button" href={hero.buttonLink}>
              {hero.buttonLabel}
            </a>
          </div>
        </div>    
      </section>
    );
}

export default Hero;