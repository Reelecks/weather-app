import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Paris from './components/Paris';
import NewYork from './components/NewYork';
// import Root, { loader as rootLoader } from './root';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <Home />,
      exact: true,
      // loader: rootLoader,
    },
    {
      path: "/paris",
     element:  <Paris />,
    //  loader: rootLoader,
    },
    {
      path: "/new-york",
     element:  <NewYork />,
    //  loader: rootLoader,
    }
  ]
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
