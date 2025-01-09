import { Link } from "react-router-dom";

import "./NavigationBar.scss";

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/">Daniels Outfit Generator</Link>
            <Link to="/wardrobe" className="navbar__wardrobe">
                Wardrobe
            </Link>
        </nav>
    );
}
