import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jorge.mateus19@hotmail.com",
      href: "mailto:jorge.mateus19@hotmail.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (18) 99663-6716",
      href: "tel:+5518996636716"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Quatá, SP - Brasil"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: Mail,
      label: "Email Direto",
      href: "mailto:jorge.mateus19@hotmail.com",
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title fade-in">Entre em Contato</h2>
            <p className="section-subtitle fade-in fade-in-delay-1">
              Vamos conversar sobre seu próximo projeto!
            </p>
          </div>

          {/* Two Columns Layout */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            {/* Left Column — Introduction Text */}
            <div className="fade-in fade-in-delay-2 space-y-6">
              <h3 className="text-center md:text-justify text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Vamos trabalhar juntos!
              </h3>

              <div className="text-justify space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sou apaixonado por tecnologia, soluções modernas e projetos que fazem a diferença.
                  Se você busca alguém com experiência em desenvolvimento web e infraestrutura,
                  estou pronto para contribuir.
                </p>

                <p>
                  Entre em contato pelos meios ao lado — será um prazer conversar com você!
                </p>
              </div>
            </div>

            {/* Right Column — Contact Card */}
            <div className="fade-in fade-in-delay-3">
              <div className="bg-contact-card backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-contact-border transition-all duration-300 hover:shadow-2xl">

                {/* Contact Information */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start sm:items-center gap-4 group">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-contact-icon-bg rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110">
                        <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-contact-icon" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1">{item.label}</p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm sm:text-base lg:text-lg text-foreground hover:text-primary transition-colors duration-200 font-medium break-words"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base lg:text-lg text-foreground font-medium break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-contact-border my-6"></div>

                {/* Social Links */}
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 text-center">
                    Redes Sociais
                  </p>

                  <div className="flex justify-center items-center gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-muted rounded-xl text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;