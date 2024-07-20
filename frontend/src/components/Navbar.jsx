import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBlog, FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        // Scrolling down
        setIsSticky(true);
      } else {
        // Scrolling up
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header>
      <nav
        className={`bg-blue-200 ${
          isSticky
            ? "shadow-md fixed w-full top-0 transition duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          {/* Navigation for large devices */}
          <ul className="md:flex space-x-6 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="text-base text-black uppercase hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Menu button for large devices */}
          <div className="lg:flex items-center">
            <button>
              {/* <FaBarsStaggered className="w-5 hover:text-blue-700" /> */}
            </button>
          </div>

          {/* Menu button for mobile devices */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Responsive menu */}
      {isMenuOpen && (
        <div className="md:hidden   bg-blue-500">
          <ul className="text-center py-4">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="block text-lg text-white hover:underline"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
