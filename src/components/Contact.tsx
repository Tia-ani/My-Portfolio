import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin, Code } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold heading-gradient mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:p-8 bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:anishka.khurana@adypu.edu.in" className="text-foreground hover:text-primary transition-colors">
                    anishka.khurana@adypu.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground mb-1">Phone</h4>
                  <a href="tel:+919137620660" className="text-foreground hover:text-primary transition-colors">
                    +91 9137620660
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium mb-4 text-foreground">Social Profiles</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://codeforces.com/profile/Tia_ani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center transition-all duration-300"
                >
                  <Code className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/anishka-khurana-9aa245324/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Tia-ani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 md:p-8 bg-white dark:bg-gray-900/50 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
