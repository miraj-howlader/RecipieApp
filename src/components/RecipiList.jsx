import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link"

const RecipiList = ({recipeList}) => {
   
  return (
    <div className="">
      <div className=" p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h1 className=" text-4xl font-bold text-gray-800">Recipes</h1>
         <Link href={'/'}>Go Home</Link>
        <div className=" pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            recipeList && recipeList.length > 0 ?
            recipeList.map((item) => (
                <Link href={`recipe-list/${item.id}`}>
                 <Card>
                    <CardContent className='bg-white rounded-md overflow-hidden
                     shadow-lg cursor-pointer hover:scale-105 transition-all
                      duration-300'>
                        <div className=" w-full aspect-w-16 aspect-h-8 lg:h-80">
                         <img
                         src={item.image}
                         alt={item.name}
                         className=" w-full h-full object-cover
                          object-top"
                         />
                        </div>
                        <div className=" p-6">
                            <h3 className=" text-lg font-bold text-gray-800">{item.name}</h3>
                            <div className=" mt-4 flex items-center
                             flex-wrap gap-2">
                                <p className=" text-lg text-gray-600">Rating: {item.rating}</p>
                                 <div className=" ml-auto">
                                  <p>{item.cuisine}</p>
                                 </div>
                            </div>
                        </div>

                    </CardContent>
                 </Card>
                </Link>
            ))
            :null
          }
        </div>
      </div>
    </div>
  )
}

export default RecipiList
