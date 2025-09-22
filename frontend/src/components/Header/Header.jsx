
import './Header.css'
import {Link,useLocation,useNavigate,Navigate} from 'react-router-dom'
import {  useEffect, useState } from 'react'
function Header() {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const navigate = useNavigate();


    useEffect(() => {
        setActive(location.pathname);
    }, [location.pathname]);

    

    return (
        <div className="header">
            <div className="logo"><Link><span>MB</span></Link></div>
            <nav>
                <ul>
                    {
                        active=== "/login" || active === "/signup" ?null: <li><Link to="/home">Home</Link></li>
                    }
                    
                    {
                        active ==="/home" || active === "/" ? <li onClick={() => {
                            localStorage.removeItem("token")
                            navigate("/login")
                            
                            }}><Link to="/">Logout</Link></li>:<>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        </>
                    }
                    
                </ul>
            </nav>
        </div>
    )
}

export default Header