import React from 'react';
import '../styles/RecipeCard.css'

function RecipeCard(props) {
    return (
        <div className='card'>
            <img className='image'  src={props.picture} alt=""/>
            <h1 className='title'>{props.title}</h1>
            <h2 className='author'>{props.author}</h2>
            <p className='desc'>{props.desc}</p>
        </div>
    );
}



export default RecipeCard;