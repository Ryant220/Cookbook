import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        const fetchAllRecipes = async () => {
          try {
            const res = await axios.get("http://localhost:8800/recipes");
            setRecipes(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllRecipes();
      }, []);

    return (
        <div>
            <h1>Cookbook</h1>
            <div className="recipes">
                {recipes.map(recipe=>(
                    <div className="recipe">
                        <img src={recipe.picture} alt="" />
                        <h2>{recipe.title}</h2>
                        <p>{recipe.author}</p>
                        <p>{recipe.desc}</p>
                    </div>
                ))}
            </div>
        </div>    
    )
}

export default Recipes