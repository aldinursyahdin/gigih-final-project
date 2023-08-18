/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import React from 'react'
// layouts and pages
import RootLayout from './layouts/Rootlayout'
import Dashboard from './pages/Dashboard'
import VideoDetail from './pages/VideoDetail'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="video/:id" index element={<VideoDetail />} />
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App
