import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portifolio';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Skills /> */}
      <Portfolio />
      <Certifications />
      <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
