import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
              <span className="heading-gradient">Anishka Khurana</span>
            </h1>
            
            <div className="relative h-14 overflow-hidden">
              <TypeAnimation
                sequence={[
                  'Aspiring SDE',
                  2000,
                  'Frontend Developer',
                  2000,
                  'CP Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl md:text-2xl text-primary font-medium"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 font-nunito"
            >
              Turning ideas into interactive experiences through code.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#projects" className="btn-primary transform hover:scale-105 transition-all">
                View Projects
              </a>
              <a href="#contact" className="btn-outline transform hover:scale-105 transition-all">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="photo-frame max-w-xs">
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 5 }}
                className="relative z-10"
              >
                <img 
                  src="/images/me.png" 
                  alt="Anishka Khurana" 
                  className="rounded-xl object-cover"
                />
                
                <div className="absolute -bottom-3 -right-3 p-2 rounded-lg bg-white dark:bg-gray-900 shadow-md">
                  <span className="text-sm font-medium text-primary">Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
