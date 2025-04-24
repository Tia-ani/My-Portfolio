import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Wordle-Game",
      description: "Developed an interactive Wordle-style game with real-time feedback, state management, and responsive UI.",
      technologies: ["HTML", "CSS", "JS", "TS", "React"],
      image: "/lovable-uploads/42609cbf-0578-4ec1-803d-dccc6877a6e2.png",
      liveUrl: "https://wordly-wonders-react-fhsx.vercel.app/",
      githubUrl: "https://github.com/Tia-ani/wordly-wonders-react",
      featured: true
    },
    {
      id: "2",
      title: "ESSENCE",
      description: "Wedding destination planner with search & filtering functionality.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/lovable-uploads/23176201-dfa8-452b-b489-33adb4f76044.png",
      liveUrl: "https://cheerful-jalebi-c14db7.netlify.app/",
      githubUrl: "https://github.com/Maxiemad/ESSENCE"
    },
    {
      id: "3",
      title: "Ethereal Love",
      description: "A heartwarming exploration of mystical love theories from around the world, blending cultural traditions, spiritual beliefs, and cosmic signs that celebrate the magic of connection.",
      technologies: ["HTML", "CSS", "JS", "TS", "React"],
      image: "/lovable-uploads/03f84b07-8170-46e2-8ba5-d12afad39a65.png",
      liveUrl: "https://starlit-brioche-44905c.netlify.app/",
      githubUrl: "https://github.com/Tia-ani/Love",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4 font-heading">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some projects I've worked on. Each one represents different skills and challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 group border border-primary/20 hover:border-primary/40 bg-background"
    >
      {project.image && (
        <div className="relative overflow-hidden h-48 lg:h-56">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col border-t border-primary/20">
        <h3 className="text-xl font-bold mb-2 text-foreground font-heading">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors hover:scale-105 duration-300"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors hover:scale-105 duration-300"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
