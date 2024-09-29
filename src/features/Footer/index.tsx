import logo from '../../assets/img/logo.svg';

export const Footer = () => {
    return (
        <footer className='py-8 bg-pink-300'>
            <div className='mx-auto max-w-[1200px] flex justify-between items-start'>
            <a href='/'>
                <img src={logo} alt="Logo" />
            </a>
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
            </div>
        </footer>
    );
};