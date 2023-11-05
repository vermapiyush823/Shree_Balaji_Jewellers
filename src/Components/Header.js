import LogoImage from "../images/Shree Balaji Jewellers-logos_black.png"
import "../App.css"
function Header(){
    return(
        <header>
            <nav className="fixed-top">
            <input type="text" placeholder="Search Anything"></input>
            <button>Search</button>
            <img src={LogoImage}></img>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Cart</a></li>
            </ul>
            </nav>
        </header>
    );
}
export default Header;