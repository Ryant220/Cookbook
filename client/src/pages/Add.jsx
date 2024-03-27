import React, { useState } from "react"
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import AddPictureButton from '../components/AddPictureButton'

const Add = () => {

    const navigate = useNavigate()

    const [recipe, setRecipe] = useState({
        title:'defualt title',
        author: 'default author',
        desc: 'default desc',
        picture: 'https://publiccookbookbucket.s3.amazonaws.com/ChickenPicture.jpg'
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setRecipe((prev) => ({...prev, [name]:value}))
    } 

    const [error, setError] = useState(false)
    const handleClick = async (event) => {
        event.preventDefault()
        try {
            await axios.post("http://localhost:8800/recipes", recipe)
            navigate('/')
        
        } catch (error) {
            console.log(error) 
            setError(true)
        }
    }

    return (
        <div>
            <h1>Add New Recipe</h1>
            <input type="text" placeholder='title' name='title'  onChange={handleChange}/>
            <input type="text" placeholder='author'name='author' onChange={handleChange}/>
            <input type="text" placeholder='desc'name='desc'  onChange={handleChange}/>S
            <input type="text" placeholder='picture'name='picture'  onChange={handleChange}/>
            
            
            <AddPictureButton/>
            
            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link to="/">See all Recipes</Link>
        </div>    
    )
}

export default Add