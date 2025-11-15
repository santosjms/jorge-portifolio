import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/jorge-profile.jpeg';
import TypingEffect from "@/components/TypingEffect";

const Hero = () => {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 5.0
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in mb-8">
            <div className="relative w-60 h-60 lg:w-65 lg:h-65 mx-auto mb-6">
              <img
                src={profileImage}
                alt="Jorge Mateus"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>
          <div className="fade-in">
            {/* <p className="text-primary text-lg lg:text-xl font-medium mb-4">
              Olá, eu sou
            </p> */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Jorge Mateus
              </span>
            </h1>
          </div>

          {/* Role */}
          <div className="fade-in fade-in-delay-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8">
              Profissional de Infraestrutura de TI & Desenvolvedor
            </h2>
          </div>

          {/* Tagline */}
          <div className="fade-in fade-in-delay-2">
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Competência em <span className="text-primary font-semibold">infraestrutura de TI</span> e 
              <span className="text-primary font-semibold"> desenvolvimento de softwares</span>, 
              combinando experiência em{" "}
              <TypingEffect
              
                words={["tecnologias", "redes", "segurança", "cloud computing"]}
              /> e desenvolvimento de aplicações modernas.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-3">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {/* <button 
                onClick={handleProjectsClick}
                className="hero-button group"
              >
                Ver Infraestrutura
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button> */}
              <button 
                onClick={handleContactClick}
                className="hero-button-secondary"
              >
                Entre em Contato
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="fade-in fade-in-delay-4">
            <div className="flex justify-center space-x-6">
              <a
                href="www.linkedin.com/in/jorge-mateus-545060147"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/santosjms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:jorge.mateus19@hotmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-primary/15 rounded-full blur-lg animate-pulse delay-500" />
    </section>
  );
};

export default Hero;