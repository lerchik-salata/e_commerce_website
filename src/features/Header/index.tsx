import logo from '../../assets/img/logo.svg';
import search from '../../assets/img/search.svg';
import cart from '../../assets/img/cart.svg';

export const Header = () => {
    return (
        <header className="py-8 bg-pink-300">
            <div className='mx-auto max-w-[1200px] flex justify-between items-center'>
            <a href="/">
                <img src={logo} alt="Logo" />
            </a>
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
            </div>
        </header>
    );
 };