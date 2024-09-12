import GenreView from "../containers/Genres/views/GenreView"
import HomePage from "../containers/Home/views/HomePage"
import Login from "../admin/Login/views/Login"

// public routes
const publicRoutes = [
  { path: '/', element: <HomePage /> },
  { path: '/genre', element: <GenreView /> },
  
]

// private routes
const privateRoutes = [
  // admin
  { path: 'admin/login', element: <Login /> },
]

export { 
  publicRoutes, 
  privateRoutes,
}