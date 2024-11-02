import Link from 'next/link'
import React from 'react'

const RecipeDetails = ({getRecipeDetails}) => {
  return (
    <div className=' space-y-8'>
     <div className=' items-center  mt-6 pl-8 '>
     <Link
        className=' hover:scale-105 rounded-md pl-8 mt-4 border px-6 py-2 bg-gray-500 text-white'
         href={'/recipe-list'}>Go to recipe list</Link>
     </div>
      <div className=' p-6 lg:max-w-6xl max-w-2xl mx-auto'>
        <div className=' grid items-start grid-cols-1 lg:grid-cols-2
         gap-4'>
            <div className=' w-full lg:sticky top-0 sm:flex gap-2'>
                <img src={getRecipeDetails.image} alt=""
                className=' w-4/5 rounded  object-cover' />

            </div>
            <div>
                <h2 className=' text-3xl font-extrabold text-gray-900'>{getRecipeDetails.name}</h2>
            <div className=' flex flex-wrap gap-4 mt-5'>
                <p className=' text-2xl text-gray-700'>{getRecipeDetails.mealType[0]}</p>
            </div>
            <div>
                <p className=' text-xl text-gray-800'>{getRecipeDetails.cuisine}</p>
            </div>
            <div className=' mt-5'>
                <p className=' text-lg font-bold text-gray-700'>Ingredients</p>
                <ul className=' space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                    {
                        getRecipeDetails.ingredients.map((item)=>(
                            <li>{item}</li>
                        ))
                    }

                </ul>
            </div>
            </div>

        </div>

      </div>
    </div>
  )
}

export default RecipeDetails
