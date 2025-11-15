import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Server, 
  Smartphone,
  Zap,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-end",
      icon: Code,
      skills: [
        "React.js", "Next.js", "TypeScript", "JavaScript", 
        "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"
      ],
      color: "blue"
    },
    {
      title: "Back-end",
      icon: Database,
      skills: [
        "Node.js", "Express.js", "Java Spring", "PostgreSQL", 
        "REST APIs", "GraphQL", "Authentication", "Microservices"
      ],
      color: "green"
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: [
        "Docker", "AWS", "Azure", "Oracle Cloud", 
        "CI/CD", "Git", "Linux", "N8N Automation"
      ],
      color: "purple"
    },
    {
      title: "Infraestrutura",
      icon: Server,
      skills: [
        "VMWare", "Hyper-V", "Active Directory", "Dell EMC", 
        "Windows Server", "Network Administration", "System Monitoring", "Backup Solutions"
      ],
      color: "orange"
    },
    {
      title: "Redes & Segurança",
      icon: Shield,
      skills: [
        "Fortinet Firewalls", "Cisco Switches", "VLAN Configuration", "Network Security", 
        "Access Points", "VPN Setup", "Intrusion Detection", "Network Monitoring"
      ],
      color: "red"
    },
    {
      title: "Ferramentas",
      icon: Settings,
      skills: [
        "VS Code", "Git", "Docker", "Postman", 
        "Figma", "Jira", "Slack", "Teams"
      ],
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 text-blue-800",
      green: "bg-green-50 border-green-200 text-green-800",
      purple: "bg-purple-50 border-purple-200 text-purple-800",
      orange: "bg-orange-50 border-orange-200 text-orange-800",
      red: "bg-red-50 border-red-200 text-red-800",
      gray: "bg-gray-50 border-gray-200 text-gray-800"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: "text-blue-600 bg-blue-100",
      green: "text-green-600 bg-green-100",
      purple: "text-purple-600 bg-purple-100",
      orange: "text-orange-600 bg-orange-100",
      red: "text-red-600 bg-red-100",
      gray: "text-gray-600 bg-gray-100"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title fade-in">
              Habilidades & Tecnologias
            </h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Domínio técnico abrangente em desenvolvimento e infraestrutura
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 fade-in fade-in-delay-${categoryIndex + 2}`}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${getIconColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms` 
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="mt-16 fade-in fade-in-delay-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">Tecnologias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Satisfação do Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;