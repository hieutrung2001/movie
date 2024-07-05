import React from 'react'
import Layout from './layouts/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
