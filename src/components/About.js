import { Component } from "react";
import { Profile } from "./Profile";
import Profileclass from "./ProfileClass"
import { UserContext } from "../../utils/userContext";
// const About =()=>{
//     console.log("Parent component")
//     return (
//         <div>
//             <Profile authorname = "Nishat Arif" location="New Jersey" emailid="nishatarif@gmail.com" comptype="Functional"/>
//             {/* <Profileclass authorname = "Nish" location="jersey" emailid="xyz@gmail.com" comptype="ClassBased 1"/>
//             <Profileclass authorname = "Nish" location="jersey" emailid="xyz@gmail.com" comptype="ClassBased 2"/> */}

//         </div>)
// }

class About extends Component{
    constructor(props){
        console.log("constructor of Parent Component")
            super(props);

    }

     componentDidMount(){
        console.log("component Did Mount of Parent Component ",)
        // to make api calls 
    }

    componentDidUpdate(){
         console.log("component Did Update of Parent component",)
        
    }

     componentWillUnmount(){
         console.log("component Will Unmount of Parent component",)
        
    }

    render(){
        console.log("render of Parent Component")
        return (
        <div>
            <Profile authorname = "Nish" location="jersey" emailid="xyz@gmail.com" comptype="Functional"/>
            <Profileclass authorname = "Nishat" location="jersey" emailid="xyz@gmail.com" comptype="ClassBased 1"/>
            {/* <Profileclass authorname = "Nish" location="jersey" emailid="xyz@gmail.com" comptype="ClassBased 2"/> */}
            <p className="loggedInUser-font">loggedIn User:
                <UserContext.Consumer>
                    {(data)=> data.loggedInUser }
                </UserContext.Consumer>
            </p>

        </div>)
    }
}

export default About;