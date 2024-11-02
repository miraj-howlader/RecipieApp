import RecipeDetails from '@/components/RecipeDetails';
import React from 'react'

const fetchRecipeDetails = async (currentId) => {
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentId}`)
        const data = await apiResponse.json();
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
const RecipeDetailPage = async ({params}) => {
    const getRecipeDetails = await fetchRecipeDetails(params?.details)
  return (
    <div>
      <RecipeDetails
      getRecipeDetails={getRecipeDetails}
      />
    </div>
  )
}

export default RecipeDetailPage
