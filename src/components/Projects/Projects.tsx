import { useState, useRef } from "react";
import Button from "../Button/Button";

// Componente principal da seção de projetos
export default function Projects() {
  // Lista de projetos em destaque
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Site pessoal para apresentar minhas habilidades, como desenvolvedor frontend.",
      image: "/assets/portfolio.jpg",
      live: "https://leandrowilke.dev",
      github: "https://github.com/leandrowilke/portfolio"
    },
    {
      title: "App de Tarefas",
      description: "Aplicativo para organização de tarefas diárias, com interface intuitiva e responsiva.",
      image: "/assets/tarefas.jpg",
      live: "https://todo.leandrowilke.dev",
      github: "https://github.com/leandrowilke/todo-app"
    },
    {
      title: "Dashboard Financeiro",
      description: "Dashboard para controle financeiro pessoal, com gráficos e relatórios dinâmicos.",
      image: "/assets/dashboard.jpg",
      live: "https://dashboard.leandrowilke.dev",
      github: "https://github.com/leandrowilke/finance-dashboard"
    }
  ];

  // Estado para slide atual no mobile
  const [current, setCurrent] = useState(0);
  // Touch/swipe handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
  };

  // Funções de navegação
  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <div id="projects" className="flex flex-col items-center justify-center min-h-screen box-border">
      {/* Título da seção */}
      <h2 className="text-6xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 drop-shadow-lg section-title-shadow" data-aos-duration="1000" data-aos="fade-down">
        <span className="inline-block align-middle mr-2">💡</span>
        Projetos em Destaque
      </h2>
      {/* Carousel mobile */}
      <div className="w-full max-w-7xl mx-auto min-h-0 px-2 sm:px-0">
        <div className="block sm:hidden relative">
          <div
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className={`bg-(--color-react-card)/90 backdrop-blur-lg rounded-xl shadow-lg p-4 flex flex-col items-center gap-4 border border-(--color-react-border) w-full min-w-[90vw] max-w-[90vw] mx-1 snap-center transition-transform duration-300 ${idx === current ? 'scale-100' : 'scale-95 opacity-60 pointer-events-none'}`}
                style={{ display: idx === current ? 'block' : 'none' }}
                id="cardProject"
              >
                <div className="w-full flex flex-col items-center">
                  <img src={project.image} alt={project.title} className="w-full max-w-full h-40 object-cover rounded-lg mb-2" />
                </div>
                <h3 className="text-xl font-semibold text-(--color-react-blue)">{project.title}</h3>
                <p className="text-(--color-react-text) text-center mb-4">{project.description}</p>
                <div className="flex gap-4 justify-center w-full">
                  <Button onClick={() => window.open(project.live, "_blank")}>Ver Online</Button>
                  <Button onClick={() => window.open(project.github, "_blank")}>Ver GitHub</Button>
                </div>
              </div>
            ))}
          </div>
          {/* Navegação do carousel */}
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prev} className="rounded-full bg-(--color-react-blue) text-white w-8 h-8 flex items-center justify-center font-bold">&#8592;</button>
            <button onClick={next} className="rounded-full bg-(--color-react-blue) text-white w-8 h-8 flex items-center justify-center font-bold">&#8594;</button>
          </div>
          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-2">
            {projects.map((_, idx) => (
              <span key={idx} className={`w-2 h-2 rounded-full ${idx === current ? 'bg-(--color-react-blue)' : 'bg-gray-500'} inline-block`}></span>
            ))}
          </div>
        </div>
        {/* Grid normal em telas maiores */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-8 w-full min-h-0 overflow-y-clip">
          {projects.map((project, idx) => {
            const aosList = ["fade-right", "fade-up", "fade-left"];
            return (
              <div
                key={project.title}
                className="bg-(--color-react-card)/90 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 border border-(--color-react-border) mb-0 md:mb-0 w-full" id="cardProject"
                data-aos={aosList[idx % aosList.length]}
                data-aos-duration="1000"
                style={{ marginBottom: 0 }}
              >
                <div className="w-full flex flex-col items-center">
                  <img src={project.image} alt={project.title} className="w-full max-w-full h-40 object-cover rounded-lg mb-2" />
                </div>
                <h3 className="text-xl font-semibold text-(--color-react-blue)">{project.title}</h3>
                <p className="text-(--color-react-text) text-center mb-4">{project.description}</p>
                <div className="flex gap-4 justify-center w-full">
                  <Button onClick={() => window.open(project.live, "_blank")}>Ver Online</Button>
                  <Button onClick={() => window.open(project.github, "_blank")}>Ver GitHub</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
