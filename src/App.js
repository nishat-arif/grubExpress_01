import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantCard from "./components/RestaurantCard"


const App =()=>{
    return (
        <div className="app">
            <Header /> 
            {/* <Body />   */}
            <Outlet/>
            <Footer/>    
        </div>
    );
}


const appRouter = createBrowserRouter([
    {path:"/",
    element: <App/>,
    errorElement: <Error/>,
    children:[

        {path:"/",
        element:<Body/>,
},,

        {path:"/about",
        element:<About/>,
},
        

        {path:"/contact",
        element:<Contact/>,
  },


        {path:"/restaurant/:resId",
        element:<RestaurantCard/>}

    ]
    }


])


const root= ReactDOM.createRoot(document.getElementById("root"));


// root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>);