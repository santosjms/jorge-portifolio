import { ExternalLink, Github } from 'lucide-react';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import project3Image from '@/assets/project-3.jpg';
import project4Image from '@/assets/project-4.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description: "Aplicação web completa para gestão de recursos empresariais, desenvolvida com React, Node.js e PostgreSQL. Inclui dashboard interativo, gestão de usuários e relatórios em tempo real.",
      image: project1Image,
      tags: ["React", "Node.js", "PostgreSQL", "Express"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "development"
    },
    {
      id: 2,
      title: "Infraestrutura Cloud AWS",
      description: "Implementação completa de infraestrutura cloud na AWS incluindo configuração de VPC, EC2, RDS e sistemas de monitoramento. Redução de 40% nos custos operacionais.",
      image: project2Image,
      tags: ["AWS", "Docker", "Terraform", "CloudWatch"],
      githubUrl: "https://github.com",
      category: "infrastructure"
    },
    {
      id: 3,
      title: "E-commerce Responsivo",
      description: "Plataforma de e-commerce moderna com Next.js, integração de pagamentos, gestão de estoque e painel administrativo. Design responsivo e otimizado para SEO.",
      image: project3Image,
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://ecommerce-demo.com",
      category: "development"
    },
    {
      id: 4,
      title: "Rede Corporativa Segura",
      description: "Projeto de reestruturação da rede corporativa com implementação de firewalls Fortinet, switches Cisco e sistema de monitoramento centralizado.",
      image: project4Image,
      tags: ["Fortinet", "Cisco", "Network Security", "VLAN"],
      category: "infrastructure"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">
              Projetos & Atividades
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Showcases dos meus trabalhos em desenvolvimento e infraestrutura de TI
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-card group fade-in fade-in-delay-${index + 2}`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 ml-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="Ver no GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          aria-label="Ver projeto ao vivo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tech-badge"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="pt-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.category === 'development' 
                        ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                        : 'bg-green-100 text-green-800 border border-green-200'
                    }`}>
                      {project.category === 'development' ? 'Desenvolvimento' : 'Infraestrutura'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12 fade-in fade-in-delay-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button-secondary inline-flex items-center"
            >
              Ver Mais Projetos
              <Github className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;