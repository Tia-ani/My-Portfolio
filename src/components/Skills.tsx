
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: "HTML5", icon: "https://img.icons8.com/?size=100&id=23028&format=png" },
    { name: "CSS3", icon: "https://img.icons8.com/?size=100&id=38272&format=png" },
    { name: "JavaScript", icon: "https://img.icons8.com/?size=100&id=106036&format=png" },
    { name: "TypeScript", icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png" },
    { name: "Python", icon: "https://img.icons8.com/?size=100&id=12592&format=png" },
    { name: "React-Js", icon: "https://img.icons8.com/?size=160&id=Y8UPqrI8Yp7V&format=png" },
    { name: "Next-js", icon: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=54087&format=png" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I'm proficient with.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(155, 135, 245, 0.5)"
                }}
                className="w-24 h-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex items-center justify-center mb-4 transition-all duration-300 hover:border hover:border-primary"
              >
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              </motion.div>
              <span className="text-center font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
