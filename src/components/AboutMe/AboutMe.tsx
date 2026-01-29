
export default function AboutMe() {
  return (
    <section id="aboutme" className="flex flex-col items-center justify-center text-center min-h-screen px-2 sm:px-0">
      {/* Conteúdo da seção Sobre Mim */} 
      <h2 data-aos-duration="1000" data-aos="fade-up" className="lg:text-6xl font-extrabold mt-10 mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 drop-shadow-lg section-title-shadow">Sobre Mim</h2>
      <p
        data-aos-duration="1000" data-aos="zoom-in-up"
        className="max-w-2xl mx-auto text-lg md:text-xl font-medium  px-6 py-5 mb-4 "
        style={{
          textAlign: 'center',
          letterSpacing: '0.5px',
          lineHeight: '1.8',
        }}
      >
        Sou um desenvolvedor Front-End apaixonado por criar experiências digitais incríveis.<br /><br />
        Com foco em <span className="text-blue-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">TypeScript</span> e outras tecnologias modernas, estou sempre buscando aprender e crescer profissionalmente.<br /><br />
        Adoro trabalhar em equipe e enfrentar novos desafios que me permitam aprimorar minhas habilidades.<br /><br />
        Vamos construir algo incrível juntos!
      </p>
    </section>
  );
}