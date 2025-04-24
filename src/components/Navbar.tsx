
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white/80 dark:bg-foreground/80 backdrop-blur-md shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.p className="font-mono text-xl font-bold text-primary">AK</motion.p>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-6 flex flex-col items-end space-y-1.5">
          <span className={`block h-0.5 bg-foreground transition-all ${isOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"}`}></span>
          <span className={`block h-0.5 bg-foreground transition-all ${isOpen ? "opacity-0" : "w-4"}`}></span>
          <span className={`block h-0.5 bg-foreground transition-all ${isOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"}`}></span>
        </div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-12 right-0 w-48 py-2 bg-background dark:bg-foreground border border-border rounded-lg shadow-lg"
        >
          <a href="#home" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#education" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            Education
          </a>
          <a href="#projects" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#skills" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-secondary transition-colors" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
