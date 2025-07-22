import { Link } from "react-router-dom";
import { LOGO_URL} from "../../utils/constants"; 
import { useContext, useState } from "react";
import { useOnlineStatus } from "../../utils/useOnlineStatus";
import { UserContext } from "../../utils/userContext";
import { useSelector } from "react-redux";



const Header = () => {

    const [btnText, setBtnText] = useState('Login')
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)

    //subscribing to store using selector
    const cartSelector = useSelector((store)=>
        store?.cart?.items
    )
    console.log("cartSelector", cartSelector)


    // handleLoginBtn=()=>{
    //     if(btnText.toLowerCase() == 'login'){
    //         setBtnText('Logout')
    //     }else{
    //         setBtnText('Login')
    //     }
    // }

    

    return (
        <div className="flex justify-between bg-green-50 shadow-lg m-2 sm:bg-pink-50 lg:bg-yellow-100 ">
 
            <div className="w-24">
                <img src={LOGO_URL} alt="GrubExpress Logo" className="logo_img"></img>
            </div >
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    {/* <li><Link >Online Status: {onlineStatus? "ON" : "OFF"}</Link></li> */}
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li> 
                    <li className="px-2"><Link to="/cart">Cart- ({cartSelector?.length}items)</Link></li>
                    <li className="px-2"><Link to="">{loggedInUser}</Link></li>
                    {/* <button type="button" onClick={handleLoginBtn}>{btnText}</button> */}
                </ul>
            </div>
        </div>
    );
}

export default Header;