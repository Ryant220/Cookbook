import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import axios from "axios"
import '../styles/RecipeCard.css'

const Recipe = () => {
    
    const [recipe, setRecipe] = useState({
        title:'defualt title',
        author: 'default author',
        desc: 'default desc',
        picture: ''
    })

    const location = useLocation()
    const recipeid = location.pathname.split("/")[2];

    useEffect(() => {
        const getRecipe = async () => {
          try {
            const res = await axios.get(`http://localhost:8800/recipe/${recipeid}`);
            setRecipe(res.data[0]);
          } catch (err) {
            console.log(err);
          }
        };
        getRecipe();
      }, [recipeid]);

    return (
        <div>
            <img className="image" src={recipe.picture} alt="" />
            <p>Title: {recipe.title}</p>
            <p>Author: {recipe.author}</p>
            <p>Desc: {recipe.desc}</p>
            <p>id: {recipeid} </p> 
        </div>
    )
}

export default Recipe