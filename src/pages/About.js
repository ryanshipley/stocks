import React from "react";
import { Link } from "react-router-dom";

function About(props){
    return(
        <div>
            <h1>We Display Stonk</h1>
            <Link to="/stocks">
                Check out these stonks
            </Link>
            <div>
                <img src="https://i.ytimg.com/vi/SMRg9mKcyhM/mqdefault.jpg" />
            </div>
        </div>
    );
};

export default About;