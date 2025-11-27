import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import site1Thumb from "@/assets/infolp-thumb.jpg";
import site2Thumb from "@/assets/bizidonuts-thumb.jpg";
import site3Thumb from "@/assets/cyrino-thumb.jpg";

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const projects = [
    {
      title: "Site Infolp Infraestrutura",
      description: "Website moderno, responsivo e otimizado para conversão, desenvolvido com as melhores práticas de UX/UI.",
      image: site1Thumb,
      link: "https://www.infolp.com.br/",
      year: "2025",
      tags: ["TypeScript", "Responsivo", "Moderno"]
    },{
      title: "Site Ciryno Contabilidade",
      description: "Website moderno, paginado, responsivo e otimizado para conversão, desenvolvido com as melhores práticas de UX/UI.",
      image: site3Thumb,
      link: "https://www.cyrinocontabilidade.com.br",
      year: "2025",
      tags: ["Desenvolvido em parceria com evandroacorsi.dev"]
    },
    
    
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="portfolio" className="py-20 bg-portfolio-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="section-title">Sites Criados</h2>
          <p className="section-subtitle">Projetos desenvolvidos com excelência e atenção aos detalhes</p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 md:gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(50%-1.5rem)] min-w-0"
                >
                  <div className="group bg-portfolio-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-portfolio-accent/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-portfolio-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {project.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 group-hover:text-portfolio-accent transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm md:text-base mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent-glow transition-colors font-semibold group/link"
                      >
                        Visitar Site 
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-portfolio-accent hover:text-white hover:border-portfolio-accent transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:bg-portfolio-accent hover:text-white hover:border-portfolio-accent transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-portfolio-accent"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;