import { useState } from 'react';

import { Award, ExternalLink } from 'lucide-react';
import fortinetCert from '@/assets/certificado-fortinet.jpg';
import ciscoCert from '@/assets/certificado-cisco-network-defense.jpg';
import vmwareCert from '@/assets/Fortinet-cert.png';
import azureCert from '@/assets/Fortinet-cert.png';

import fortinetLogo from '@/assets/logo-fortinet.png';
import ciscoLogo from '@/assets/logo-cisco.png';
import vmwareLogo from '@/assets/Fortinet-cert.png';
import microsoftLogo from '@/assets/Fortinet-cert.png';

import fortinetBadge from '@/assets/badge-fortinet.png';
import ciscoBadge from '@/assets/badge-cisco.png';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const certifications = [
    {
      title: "Introduction to the Threat Landscape 3.0",
      organization: "Fortinet",
      year: "2025",
      image: fortinetCert,
      logo: fortinetLogo,
      badge: fortinetBadge,
      link: "#"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      organization: "Cisco Systems",
      year: "2025",
      image: ciscoCert,
      logo: ciscoLogo,
      badge: ciscoBadge,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex gap-6">
                {/* Left side - Badge */}
                
                  <div className="w-24 h-center md:w-40 md:h-40 flex items-center justify-center">
                    <img 
                      src={cert.badge} 
                      alt={`${cert.organization} logo`}
                      className="h-full w-auto object-contain"
                    />
                  </div>
               

                {/* Right side - Content */}
                <div className="flex-1 min-w-0">
                  {/* Company Logo and Year */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-6 max-w-[100px]">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.organization} logo`}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-card-foreground mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.organization}
                  </p>
                  
                  {/* Link */}
                  <button
                    onClick={() => setSelectedCert(cert.image)}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium group-hover:gap-3"
                  >
                    Ver Certificado
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0">
            <DialogHeader className="p-6 pb-0">
              <DialogTitle>Certificado</DialogTitle>
            </DialogHeader>
            <div className="p-6 overflow-auto">
              {selectedCert && (
                <img 
                  src={selectedCert} 
                  alt="Certificado completo"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Certifications;