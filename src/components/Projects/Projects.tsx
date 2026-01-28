import Button from "../Button/Button";

const projects = [
  {
    title: "Portfólio Pessoal",
    description: "Site pessoal para apresentar minhas habilidades, como desenvolvedor frontend.",
    image: "/assets/portfolio.png",
    live: "https://leandrowilke.dev",
    github: "https://github.com/leandrowilke/portfolio"
  },
  {
    title: "App de Tarefas",
    description: "Aplicativo para organização de tarefas diárias, com interface intuitiva e responsiva.",
    image: "/assets/todo.png",
    live: "https://todo.leandrowilke.dev",
    github: "https://github.com/leandrowilke/todo-app"
  },
  {
    title: "Dashboard Financeiro",
    description: "Dashboard para controle financeiro pessoal, com gráficos e relatórios dinâmicos.",
    image: "/assets/dashboard.png",
    live: "https://dashboard.leandrowilke.dev",
    github: "https://github.com/leandrowilke/finance-dashboard"
  }
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center min-h-screen box-border">
      <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 drop-shadow-lg section-title-shadow" data-aos-duration="1000" data-aos="fade-down">
        <span className="inline-block align-middle mr-2">💡</span>
        Projetos em Destaque
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto min-h-0 overflow-y-clip">
        {projects.map((project, idx) => {
          const aosList = ["fade-right", "fade-up", "fade-left"];
          return (
            <div
              key={project.title}
              className="bg-(--color-react-card)/90 backdrop-blur-lg rounded-xl shadow-lg p-6 flex flex-col items-center gap-4 border border-(--color-react-border) mb-0 md:mb-0" id="cardProject"
              data-aos={aosList[idx % aosList.length]}
              data-aos-duration="1000"
              style={{ marginBottom: 0 }}
            >
              <img src={project.image} alt={project.title} className="w-full max-w-full h-40 object-cover rounded-lg mb-2" />
              <h3 className="text-xl font-semibold text-(--color-react-blue)">{project.title}</h3>
              <p className="text-(--color-react-text) text-center mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Button onClick={() => window.open(project.live, "_blank")}>Ver Online</Button>  
                <Button onClick={() => window.open(project.github, "_blank")}>Ver GitHub</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
