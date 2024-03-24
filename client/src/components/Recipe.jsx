import React from 'react';
import ChickenPicture from '../pictures/ChickenPicture.jpg'

function Recipe(props) {
    return (
        <div>
            <img src="https://publiccookbookbucket.s3.amazonaws.com/ChickenPicture.jpg" />
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Recipe;