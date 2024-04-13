import React from 'react';
import '../styles/RecipeCard.css'
import { Link } from 'react-router-dom';

function RecipeCard(props) {
    

    
    return (
        <div className='card'>
            <img className='image'  src={props.picture} alt=""/>
            <Link to={`/recipe/${props.recipeid}`}>
                <h1 className='title'>{props.title}</h1>
            </Link>
            <h2 className='author'>{props.author}</h2>
            <p className='desc'>{props.desc}</p>
            <p> {props.recipeid} </p>
        </div>
    );
}



export default RecipeCard;