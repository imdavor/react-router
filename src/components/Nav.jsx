import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-limk'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-limk'>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/shop' className='nav-limk'>
                            Shop
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Nav;
