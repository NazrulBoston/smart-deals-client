import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout/RootLayout.jsx';
import Home from './pages/Home/Home.jsx';
import AllProducts from './AllProducts/AllProducts.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
   children:[
    {
      index:true,
      Component:Home
    },
    {
      path:'allProducts',
      Component: AllProducts
    }
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
