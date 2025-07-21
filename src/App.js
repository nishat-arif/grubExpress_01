import React , {lazy, Suspense, useState,useEffect} from "react";
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
import { UserContext } from "../utils/userContext";
import { Provider } from "react-redux";
import appStore from "../utils/AppStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import ("./components/Grocery"))




const App =()=>{

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus)return <h1>Oops!! Looks Like you are offline!! Please check your network connection..</h1>

    const [userName , setUserName] = useState()

    useEffect(()=>{
        //make an API call for authentication and send name and password;
        //authentication api send the response with below data
        const data ={
            name :"Nishat Arif"
        }

        setUserName(data.name)
    },[])


    return (
        <div>
            <Provider store={appStore}>

            <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
                <div className="app">
                    {/* <UserContext.Provider value={{loggedInUser : "Admin"}}> */}
                        <Header /> 
                    {/* </UserContext.Provider> */}
                    {/* <Body />   */}
                    <Outlet/>
                    <Footer/>    
                </div>
            </UserContext.Provider>
            </Provider>
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

        {path:"/cart",
        element:<Cart/>},

         {path:"/grocery",
        element:<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>,
  }

    ]
    }


])


const root= ReactDOM.createRoot(document.getElementById("root"));


// root.render(<App/>);
root.render(<RouterProvider router={appRouter}/>);