import React from 'react'
import Layout from './layouts/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: publicRoutes.commonHeaderView
    },
    {
      // child route components
      children: privateRoutes.commonSidebarView
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
