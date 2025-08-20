const Hero=()=>{
    return (<main className="hero container">
        <div className="Hero-Conent">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND 
                WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            
            <div className="Hero-button">
                <button className="shop-now-btn">Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="last-para">
                <p>
                  Also Available on
                </p>

            </div>
           <div className="shops">
            <img src= "./images/flipkart.png" alt ="flipkart"></img>
            <img src= "./images/amazon.png" alt ="amazon"></img>
           </div>
           </div>
            
        
        <div className ="Hero-image">
            <img src="./images/shoe_image.png" alt="This is the shoe image">
            </img>
        </div>

    </main>
    );
};
export default Hero;