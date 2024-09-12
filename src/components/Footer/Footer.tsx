import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='flex justify-between items-start py-8'>
           <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <nav>
                <ul className='flex items-start gap-20'>
                    <li>
                        <a href="#">All Products</a>
                    </li>
                    <li>
                        <a href="#">Company</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Follow Us</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;