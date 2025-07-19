import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantCard from "./components/RestaurantCard"
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { Shimmer } from "./components/Shimmer";
//import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import ("./components/Grocery"))




const App =()=>{

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus)return <h1>Oops!! Looks Like you are offline!! Please check your network connection..</h1>


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
        element:<RestaurantCard/>},

         {path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
  }

    ]
    }


])


const root= ReactDOM.createRoot(document.getElementById("root"));


// root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>);