import GenreView from "../containers/Genres/views/GenreView.tsx"
import HomePage from "../containers/Home/views/HomePage.tsx"
import Login from "../admin/Login/views/Login.tsx"
import Home from "../admin/Home/views/Home.tsx"
import GenreList from "../admin/Genres/views/GenreList.tsx"

// public routes
const publicRoutes = {
  commonHeaderView: [
    { path: '/', element: <HomePage /> },
    { path: '/genre', element: <GenreView /> },
  ],
  otherViews: []
}

// private routes
const privateRoutes = {
  auth: [
    { path: '/admin/login', element: <Login /> },
  ],
  commonSidebarView: [
    // admin
    { path: '/admin', element: <Home /> },
    { path: '/admin/genre', element: <GenreList />}
  ],
  otherViews: []
}

export { 
  publicRoutes, 
  privateRoutes,
}