import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Home from './component/Pages/Home'
import store from './store/store.js'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { AuthLayout, Login } from './component/index.js'
import AddPost from "./component/Pages/AddPost.jsx";
import SignUp from './component/Pages/SignUp.jsx'
import EditPost from "./component/Pages/EditPosts.jsx";


import Post from "./component/Pages/Post.jsx";

import AllPosts from "./component/Pages/AllPosts.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <AuthLayout authentication={false}>
                      <Login />
                  </AuthLayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <AuthLayout authentication={false}>
                      <SignUp />
                  </AuthLayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AllPosts />
                  </AuthLayout>
              ),
          },
          {
              path: "/add-post",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AddPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <EditPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
      ],
  },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>
  )