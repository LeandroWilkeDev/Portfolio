
import './App.css';
import Header from './components/Header/Header';
import About from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.body.offsetHeight;
      setShowFooter(scrollPosition >= pageHeight - 2);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App bg-[var(--color-react-background)] min-h-screen w-full flex flex-col items-center box-border overflow-x-hidden">
      <Header />
      <main className="flex flex-col items-center">
        {/* Seção Sobre Mim */}
        <section id="about" className=" w-full ">
          <About />
        </section>
        {/* Seção Skills */}
        <section id="skills" className=" w-full ">
          <Skills />
        </section>
        {/* Seção Projetos */}
        <section id="projects" className="mb-20">
          <Projects />
        </section>
      </main>
      {/* Espaço para não sobrepor conteúdo pelo footer fixo */}
      <div className="h-20" />
      {showFooter && <Footer />}
    </div>
  );
}

export default App
