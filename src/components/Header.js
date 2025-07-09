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
                <li>Home</li>
                <li>About</li>
                <li>Contact</li> 
                <li>Cart</li>
                {/* <button type="button" onClick={handleLoginBtn}>{btnText}</button> */}
            </ul>
        </div>
        </div>
    );
}

export default Header;