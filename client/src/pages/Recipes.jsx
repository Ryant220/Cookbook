import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Recipe from '../components/Recipe.jsx';



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
                {recipes.map((recipe,i)=> (
                      <div className="recipe" key={i}>
                        <img src={recipe.picture} alt="" />
                        <Recipe title={recipe.title} author={recipe.author} desc={recipe.desc}/>
                      </div>
                ))}
            </div>
        </div>    
    )
                    
  }

export default Recipes