import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Search from './pages/Search.jsx'
import Recipes from './pages/products/Recipes.jsx'
import Register from './components/header/Register.jsx'
import Login from "./components/header/Login";
import AddRecipe from './pages/products/AddRecipe.jsx' 

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CategoryPage from './pages/category/CategoryPage.jsx'
import SingleProduct from './pages/products/SingleProduct.jsx'
import Resources from './pages/resources/Resources.jsx'
import About from './pages/about/About.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      { path: "/login", 
        element: <Login /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addrecipe", 
        element: <AddRecipe/>, // Add the CreateRecipePage component here
      },
      {
        path:"/categories/:category",
        element:<CategoryPage/>
      },
      {
        path: "search",
        element: <Search/>
      },
      {
        path:"/items/:id",
        element:<SingleProduct/>,
        loader:({params}) => fetch(`http://localhost:5000/api/items/${params.id}`)
      },
      {
        path: "/recipes",
        element:<Recipes/>
      },
      {
        path:'/resources',
        element: <Resources/>
      },
      {
        path: "/about",
        element:<About/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
