import RecipiList from '@/components/RecipiList'
import React from 'react'

const fetchListOfRecipes = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error)
    }
}


const Recipes = async () => {
    const recipeList = await fetchListOfRecipes()

    return <div>
        <RecipiList
            recipeList={recipeList} />
    </div>

}

export default Recipes
