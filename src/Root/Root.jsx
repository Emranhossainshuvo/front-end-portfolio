import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element: <Home />, 
        }, 
        {
          path: '/projects', 
          element: <Projects />
        }
      ]
    },
  ]);