import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      year: "2023",
      image: "/src/assets/aws-cert.jpg",
      link: "#"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      organization: "Cisco Systems",
      year: "2022",
      image: "/src/assets/cisco-cert.jpg",
      link: "#"
    },
    {
      title: "VMware Certified Professional",
      organization: "VMware",
      year: "2023",
      image: "/src/assets/vmware-cert.jpg",
      link: "#"
    },
    {
      title: "Microsoft Azure Fundamentals",
      organization: "Microsoft",
      year: "2023",
      image: "/src/assets/azure-cert.jpg",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Certificações</h2>
          <p className="section-subtitle">
            Certificações profissionais que validam minha expertise em infraestrutura de TI e cloud computing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {cert.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-2">
                {cert.organization}
              </p>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.year}
              </p>
              
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors duration-200 text-sm font-medium"
              >
                Ver Certificado
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;