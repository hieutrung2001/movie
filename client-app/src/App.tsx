import React from 'react'
import Layout from './layouts/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import Combine from './admin/layouts/Combine'
import AuthRequired from './routes/AuthRequired'

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: <Layout />,
      // child route components
      children: publicRoutes.commonHeaderView
    },
    {
      // auth
      children: privateRoutes.auth
    },
    {
      // sidebarView
      element: <AuthRequired item={<Combine />} />,
      children: privateRoutes.commonSidebarView
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
