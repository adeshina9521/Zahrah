import React from "react"



export default function Footer(){
    return(
        <div className="card-ft">
            <div className="subcribe">
                <h3 className="sub">Subscribe for new releases, promotions, hijab news and more:</h3>
                <input
                    className="newsletter"
                    type="email"
                    name="email"
                    placeholder="email">                  
                </input>
                <button>Subscribe</button>
            </div>

            <div className="social">
                <img className="ft_logo" src="../images/twiter_logo.png" alt="twitterlogo"></img>
                <img className="ft_logo" src="../images/facebook_logo.png" alt="facebooklogo"></img>
                <img className="ft_logo" src="../images/tiktok_logo.png" alt="tiktok logo"></img>
                <img className="ft_logo" src="../images/youtube_logo.jpg" alt="youtube logo"></img>
                <img className="ft_logo" src="../images/instagram_logo.png" alt="instagram logo"></img>
            </div>
            
            {/* <img className="ft_logo" src={Githublogo} alt="twiterlogo"></img> */}
        </div>
    )
}