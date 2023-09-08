import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar =()=>{
      return (
            <div>
                  <Link className={"link-style"} to="/">Home</Link>
                  <Link className={"link-style"} to="/about">About</Link>
                  <Link className={"link-style"} to="/careers">Careers</Link>
            </div>
      )
}
export default Navbar;