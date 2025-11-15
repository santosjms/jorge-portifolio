import { Code, Server, Shield, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description: "Especialista em servidores, virtualização e arquitetura de redes"
    },
    {
      icon: Shield,
      title: "Segurança & Redes", 
      description: "Implementação de firewalls, VPNs e soluções de segurança avançadas"
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Automação e desenvolvimento de soluções para infraestrutura"
    },
    {
      icon: Users,
      title: "Cloud & DevOps",
      description: "Migração para cloud, containers e automação de processos"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">
              Sobre Jorge Mateus
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Especialista em infraestrutura de TI com foco em soluções robustas e seguras
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="fade-in fade-in-delay-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sou especialista em infraestrutura de TI com mais de 7 anos de experiência na criação e 
                  manutenção de ambientes corporativos complexos. Minha expertise abrange desde 
                  <strong className="text-foreground"> redes e segurança</strong> até 
                  <strong className="text-foreground"> virtualização e cloud computing</strong>.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Especializo-me em <strong className="text-foreground">Fortinet Firewalls, Cisco Networks, VMWare e Hyper-V</strong>, 
                  criando infraestruturas seguras e escaláveis. Tenho ampla experiência com 
                  <strong className="text-foreground"> Active Directory, Dell EMC</strong> e 
                  soluções de backup enterprise, garantindo alta disponibilidade e recuperação de desastres.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Complemento minha expertise em infraestrutura com desenvolvimento em 
                  <strong className="text-foreground"> React, Node.js e PostgreSQL</strong>, 
                  permitindo criar soluções completas que vão desde a infraestrutura até aplicações personalizadas 
                  para <strong className="text-foreground">monitoramento e automação</strong>.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className={`bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in fade-in-delay-${index + 3}`}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;