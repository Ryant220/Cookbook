import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import RecipeCard from '../components/RecipeCard.jsx';
import NavBar from "../components/NavBar.jsx";



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
            <NavBar/> 
            <h1>Cookbook</h1>
            <div className="recipes">
                {recipes.map((recipe)=> (
                      <div key={recipe.recipeid} className="recipe">
                          <RecipeCard title={recipe.title} 
                          author={recipe.author} 
                          desc={recipe.desc} 
                          picture={recipe.picture}
                          recipeid={recipe.recipeid}/>
                      </div>
                ))}
            </div>
        </div>    
    )
                    
  }

export default Recipes