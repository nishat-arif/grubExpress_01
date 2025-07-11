import { Link } from "react-router-dom";
import { LOGO_URL} from "../../utils/constants"; 
import { useState } from "react";

const Header = () => {

    const [btnText, setBtnText] = useState('Login')

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> 
                <li><Link to="/cart">Cart</Link></li>
                {/* <button type="button" onClick={handleLoginBtn}>{btnText}</button> */}
            </ul>
        </div>
        </div>
    );
}

export default Header;