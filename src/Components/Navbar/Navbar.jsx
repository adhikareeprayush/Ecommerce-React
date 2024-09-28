import './Navbar.css'
import hamBurger from '../../assets/icons/hamburger-4-svgrepo-com.svg';
import profile from '../../assets/icons/profile-svgrepo-com (2).svg';
import heart from '../../assets/icons/heart-svgrepo-com.svg';
import shoppingBag from '../../assets/icons/bag-4-svgrepo-com.svg';
import searchIcon from '../../assets/icons/search-5-svgrepo-com.svg'
const Navbar = () => {
    return(
        <div className='Navbar'>
            <div className="top-nav d-flex justify-content-between align-items-center">
                <div className='hamburger icon-container'>
                    <img src={hamBurger} alt=""/>
                </div>
                <div className="logo fw-bold">
                    Bagstore
                </div>
                <div className="right-menus d-flex align-items-center gap-3">
                    <div className='favourites icon-container'>
                        <img src={heart} alt=""/>
                    </div>
                    <div className="cart icon-container">
                        <img src={shoppingBag} alt=""/>
                    </div>
                    <div className="profile icon-container">
                        <img src={profile} alt=""/>
                    </div>
                </div>
            </div>
            <div className="d-flex gap-4 align-items-center justify-content-between mt-4">
                <div className="categories d-flex align-items-center gap-4">
                    <buttton className='btn category'>Men</buttton>
                    <button className='btn category'>Women</button>
                    <button className='btn category'>Children</button>
                    <button className='btn category'>Brand</button>
                    <button className='btn category'>New</button>
                    <button className='btn category'>Popular</button>
                </div>
                <div className="search">
                    <input type="text" name="search" id="search" placeholder='Search...'/>
                    <img src={searchIcon} alt=""/>
                </div>
                <button className='btn category'>About</button>
                <button className='btn category'>FAQs</button>
            </div>
        </div>
    )
}

export default Navbar;