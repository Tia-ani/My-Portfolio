
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-mono text-xl font-bold mb-2">Anishka Khurana</h3>
            <p className="text-muted-foreground">Aspiring SDE | Frontend Developer</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 md:mt-0"
          >
            <div className="flex space-x-4">
              <a href="#home" className="text-foreground/70 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border-t border-foreground/10 mt-8 pt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anishka Khurana. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
