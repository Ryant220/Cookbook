import React from 'react';

function Recipe(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Recipe;