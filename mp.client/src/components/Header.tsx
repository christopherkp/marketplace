import '../shared/css/App.css';
import '../shared/css/Index.css'
import '../shared/css/Header.css'
import { Link, useLocation } from 'react-router';
function Header() {
    const currentPage = useLocation().pathname;
    const getCurrentPageHome = (currentPage: string) => {
        console.log("ww", currentPage)
        if (currentPage === "/") {
            return 'nav-link-active'
        }
        else {
            return 'nav-link'
        }
    };

    const getCurrentPageMarketplace = (currentPage: string) => {
        console.log("ww", currentPage)
        if (currentPage.includes("/marketplace/")) {
            return 'nav-link-active'
        }
        else if (currentPage === "/marketplace") {
            return 'nav-link-active'
        }
        else {
            return 'nav-link'
        }
    };
    return (
        <nav id="header">
            <div id="header-container-left">
                <Link 
                    className={getCurrentPageHome(currentPage)} to="/">Home</Link>
                <Link className={getCurrentPageMarketplace(currentPage)} to="/marketplace">Marketplace</Link>
            </div>
            <div id="header-container-right">
                <Link id="header-element" to="/marketplace">Login</Link>
            </div>
        </nav>
    );
}

export default Header;