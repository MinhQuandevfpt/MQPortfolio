import useActiveSection from '../../hooks/useActiveSection';

const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ closeMenu }) => {
    const activeSection = useActiveSection();
    
    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        // Close mobile menu after clicking
        if (closeMenu) {
            setTimeout(() => closeMenu(), 300); // Small delay for better UX
        }
    };

    return (
        <ul className="flex lg:flex-row sm:flex-col gap-6 font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg sm:w-full py-4">
        {links.map((link, index) => {
            const isActive = activeSection === link.section;
            return <li key={index} className="group">
                <a 
                    href={`#${link.section}`} 
                    onClick={(e) => handleSmoothScroll(e, link.section)}
                    className={`cursor-pointer transition-all duration-500 relative ${
                        isActive 
                            ? 'text-[#4556f4] font-semibold scale-105' 
                            : 'hover:text-[#4556f4] hover:scale-105'
                    }`}
                >
                    {link.link}
                    {isActive && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                    )}
                </a>
                <div className={`mx-auto bg-[#4556f4] h-[1px] transition-all duration-500 ${
                    isActive 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                }`}></div>
            </li>
        })}
    </ul>
    );
}

export default NavbarLinks