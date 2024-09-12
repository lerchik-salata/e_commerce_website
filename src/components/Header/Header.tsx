import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/search.svg';
import cart from '../../assets/img/cart.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex justify-between items-center py-8">
            <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <nav>
                <ul className="flex items-center gap-8">
                <li>
                    <a href="#">ALL PRODUCTS</a>
                </li>
                <li>
                    <a href="#">ABOUT</a>
                </li>
                <li>
                    <a href="#">SUPPORT</a>
                </li>
                </ul>
            </nav>
             <div className="flex items-center gap-3">
                <button>
                    <img src={search} alt="Search" />
                </button>
                <button>
                    <img src={cart} alt="Cart" />
                </button>
             </div>
        </header>
    );
 };

export default Header;