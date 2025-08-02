import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import MainLayout from './layout/ManLayout'
import Home from './Home'
import UserCard from './pages/UserCard'
const App = () => {
  const route=createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:'/cards',
          element:<UserCard/>
        }
      ]
    }
  ])
  return <RouterProvider router={route}/>
}

export default App
