import { motion } from "framer-motion";

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Technology (AI ML)",
      institution: "Newton School",
      period: "2024–2025",
      grade: "Grade: 8.45/10.0"
    },
    {
      title: "Intermediate (Class XII)",
      institution: "Vishwa Bharti Public School, Noida",
      period: "2022–2023",
      grade: "Grade: 80.14%"
    },
    {
      title: "Matriculation (Class X)",
      institution: "Podar International School, Navi Mumbai",
      period: "2021–2022",
      grade: "Grade: 95.8%"
    }
  ];

  return (
    <section id="education" className="py-12 md:py-20 border-y border-primary/20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 font-heading">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/30 -translate-y-1/2 hidden md:block"></div>
            
            {educationItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex-1 mb-8 md:mb-0 bg-background p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block"></div>
                <h3 className="text-xl font-bold text-primary mb-2 font-heading">{item.title}</h3>
                <p className="text-lg text-foreground/80 mb-1">{item.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                <p className="text-md font-medium">{item.grade}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
