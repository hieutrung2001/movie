import GenreView from "../containers/Genres/views/GenreView"
import HomePage from "../containers/Home/views/HomePage"

// public routes
const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/genre', component: GenreView }
]

const adminRoutes = {
  common: '/admin',
  routes: [
    {
    }
  ]
}

// private routes
const privateRoutes = [

]

export { 
  publicRoutes, 
  privateRoutes,
  adminRoutes 
}