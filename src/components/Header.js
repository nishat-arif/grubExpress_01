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
        <div className="header">
 
          <div className="logo">
            <img src={LOGO_URL} alt="GrubExpress Logo" className="logo_img"></img>
        </div>
        <div className="navItems">
            <ul className="navList">
                {/* <li><Link >Online Status: {onlineStatus? "ON" : "OFF"}</Link></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/cart">Cart- ({cartSelector?.length}items)</Link></li>
                <li><Link to="">{loggedInUser}</Link></li>
                {/* <button type="button" onClick={handleLoginBtn}>{btnText}</button> */}
            </ul>
        </div>
        </div>
    );
}

export default Header;