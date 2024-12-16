import React ,{useState,  useEffect} from 'react'
import CategoryWrapper from '../category/CategoryWrapper';
import Card from '../../components/Card';
import axios from 'axios';

const Recipes = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect(() => {
        const getLatestRecipes = async () => {
            try{
            const response = await axios.get('http://localhost:5000/api/recipes');
            setRecipes(response.data);
        } catch (error) { 
            console.error("Error fetching items:", error);
          }
        }
        getLatestRecipes(); // Call the function to fetch data
  }, []);
  return (
    <div className='px-6 lg:px-12 py-20'>
        <h1 className='text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed'>All Recipes</h1>
        <CategoryWrapper/>
    
        <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {recipes.length > 0 ? (
          recipes.map((recipes) => (
            <Card key={recipes._id} recipes={recipes} /> // Renders each recipe using the Card component
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found. Add a recipe to get started!</p>
        )}
      </ul>
    </div>
  )
}

export default Recipes;
