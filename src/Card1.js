import React from 'react';
import {Helmet} from "react-helmet"

function Card1() {
    let image = "https://www.jing.fm/clipimg/detail/8-84558_square-objects-clipart-3-d-shapes-cube.png";
return (
    <React.Fragment>
    <Helmet>
        <title> 
            Course Card - Card 1
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta property="image" content={image} />
        <meta name="description" content="This is the content for Card1" />
        <meta property="og:image" content={image} />
        <meta content="image/*" property="og:image:type" />
    </Helmet>
        <h2 className="text-center"> Here you will find content for Card1</h2>
    </React.Fragment>
)
}

export default Card1;