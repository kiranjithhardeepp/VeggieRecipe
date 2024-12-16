import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

const DesktopNav = ({menuItems, logo}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lq:px-12'>
        <a href='/'>
        <img src ={logo} alt="logo"/>
        </a>
        <ul className='flex gap-7'>

        <li>
          <Link to="/" className='font-medium capitalize text-secondary'>
            Home
          </Link>
        </li>
        <li>
          <Link to="/addrecipe" className='font-medium capitalize text-secondary'>
            Add New Recipe
          </Link>
        </li>

        {
            menuItems.map((menu,index) => (
                <li key={index}>
                    <Link to={menu} className='font-medium capitalize text-secondary'>{menu}</Link>
                </li>
            ))
        }
        </ul>

       {/*login and signup*/}

       <ul className="flex items-center gap-4 font-medium">
       <li>
          <Link to="/login" className="text-secondary px-4 py-2 rounded" onClick={() => console.log("Navigating to Login")}>
            Login
          </Link>
        </li>
  <li>
  <Link to="/register" className="text-secondary px-4 py-2 rounded" onClick={() => console.log("Navigating to Register")}>
      SignUp
    </Link>
  </li>
</ul>

    </div>
  )
}

export default DesktopNav
