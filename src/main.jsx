import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Protection from "./components/other/Protectlayout.jsx"
// import Signup from './pages/Signup.jsx'
// import Signin from './pages/Signinpage.jsx'
import Allpost from './pages/Allpost.jsx'
import Post from "./pages/Post.jsx"
import Addpost from './pages/Addpost.jsx'
import Editpage from './pages/Editpage.jsx'
import Myprofile from './pages/Myprofile.jsx'
import { Provider } from 'react-redux'
import Signuppage from './pages/Signuppage.jsx'
import Signinpage from './pages/Signinpage.jsx'
import store from "./store/store.js"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route path="/"  element={<Home/>}/>
    <Route
    path="login" 
    element={ (
      <Protection authentication={false}>
      <Signinpage/>
    </Protection>
    )    
    }  />
    <Route
    path="/create-account"
     element={(
      <Protection authentication={false}>
       <Signuppage/>
    </Protection>
    )}  />
    <Route
     path="/blogs" 
    element={(
       <Protection authentication>
         <Allpost/>
     </Protection>
    )}  />
    <Route
        path="/post/:slug"
        element={
          (
            <Protection authentication>
           <Post/>
     </Protection>
          )
        }
    />
    <Route
    path="/add-post"
    element={
      (
        <Protection authentication>
      <Addpost/>
     </Protection>
      )
    }
    />
    <Route
    path="/edit-post/:slug"
    element={(
      <Protection authentication>
       <Editpage/>
     </Protection>
    )}
    />
    <Route
    path="/user/:userId"
    element={
      (
        <Protection authentication>
        <Myprofile/>
     </Protection>
      )
    }
    />

    
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
