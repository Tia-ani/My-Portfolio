
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900/50 p-6 md:p-8 rounded-2xl shadow-lg"
          >
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              I am a frontend developer with a strong grasp of JavaScript, Python, and modern frontend technologies. My passion lies in designing seamless user experiences, building creative web applications, and solving real-world problems with code. I love exploring new features and crafting dynamic, high-performance interfaces.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Experienced in competitive programming, national-level hackathons, and building responsive web applications. Currently leading community engagement at REstart, a student-led mentorship initiative. Passionate about coding, learning, and creating impactful tech solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
