import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "首页", path: "/" },
  { name: "关于", path: "/about" },
  { name: "项目", path: "/projects" },
  { name: "联系", path: "/contact" },
];

const Navbar = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 关闭菜单当路由变化时
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/">
          <motion.div
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            WenjunLab
          </motion.div>
        </Link>

        {isMobile ? (
          <>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="block text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 w-full bg-white shadow-md py-4"
                >
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`px-8 py-2 hover:bg-gray-100 transition-colors ${
                          location.pathname === item.path
                            ? "text-primary font-medium"
                            : "text-dark"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`relative hover:text-primary transition-colors ${
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-dark"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                      layoutId="navbar-underline"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
