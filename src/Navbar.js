import { Link } from "react-router-dom"
import "./Navbar.css"
const Navbar =()=>{
      return (
        <header class="header">
		<div class="left">
            {/* <img alt="" src="/logo192.png"
                width="45" hieght="45"
                className="d-inline-block align-top"
            /> */}
			<a href="#"> Tristram's Resume</a>
		</div>
            <div class="mid">
                <ul class="navbar">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                </ul>
            </div>
            </header>
      )
}
export default Navbar;