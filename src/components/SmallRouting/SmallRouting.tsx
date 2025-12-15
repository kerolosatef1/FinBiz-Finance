import { NavLink } from "react-router-dom";
import "./SmallRouting.scss";

export default function SmallRouting() {
    
    return <>
        <div className={`SmallRouting`}>
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        
                        <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>
                                Product
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/integration">Integration</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/demo">Demo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="cta-button">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}