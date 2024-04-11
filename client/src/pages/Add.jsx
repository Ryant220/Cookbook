import React, { useState } from "react"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import RecipeCard from "../components/RecipeCard"


const Add = () => {

    const navigate = useNavigate()

    const [recipe, setRecipe] = useState({
        title:'defualt title',
        author: 'default author',
        desc: 'default desc',
        picture: ''
    })

    const handleChange = (event) => {
        const {name, value, type} = event.target
        if (type === "file") {
            setRecipe((prev) => ({...prev, [name]:event.target.files[0]}))
        } else {
            setRecipe((prev) => ({...prev, [name]:value}))
        }
    } 


    const [error, setError] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post("http://localhost:8800/recipes", recipe)
            navigate('/')
            console.log(recipe)
        } catch (error) {
            console.log(error) 
            setError(true)
        }
        
        
    }

    return (
        <div>
            <div>
                <h1>Add New Recipe</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="author">Author: </label>
                        <input type="text" id="author" name="author" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="desc">Description: </label>
                        <textarea type="text" id="desc" name="desc" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="picture"> </label>
                        <input type="file" id="picture" name="picture" accept="image/*" onChange={handleChange}/>
                        {recipe.picture && (
                            <div> 
                                <label htmlFor="preview">Preview: </label>
                                <img className="image" id="preview" name="picture" src={URL.createObjectURL(recipe.picture)} alt="Uploaded"></img>
                            </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Add