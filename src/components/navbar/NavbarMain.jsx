import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import ThemeToggle from './ThemeToggle';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-4">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] 
  bg-[#2b8eff]
   dark:text-white dark:bg-gray-900 
  p-6 rounded-r-full rounded-l-full 
  border-[0.5px] border-orange 
">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
        <ThemeToggle />
      </div>
      <div className="flex lg:hidden sm:block p-6 items-center justify-center rounded-full border-orange border-[0.5px]">
        <button className='text-2xl p-3 border border-orange rounded-full dark:text-white'
          onClick={toggleMenu} >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
