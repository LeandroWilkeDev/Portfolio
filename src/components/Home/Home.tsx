
// Importa o componente de avatar do usuário
import Avatar from '../Avatar/Avatar.tsx';
// Importa o componente de botão reutilizável
import Button from '../Button/Button.tsx';
// Importa o componente de máquina de escrever para animação de texto
import { Typewriter } from 'react-simple-typewriter';
// Importa hooks do React para estado e efeito colateral
import { useState, useEffect } from 'react';


// Componente principal da seção "Início" do portfólio
export default function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center min-h-screen px-2 sm:px-0" data-aos-duration="1000" data-aos="zoom-in">
      {/* Avatar do usuário */}
      <div className="relative mb-4 mt-10 w-full max-w-xs sm:max-w-full flex justify-center items-center">
        <Avatar />
      </div>
      {/* Animação de texto sequencial */}
      <div className="mb-2">
        <SequencedTypewriter />
      </div>
      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs sm:max-w-full mx-auto">
        <Button onClick={() => window.open('../../../public/assets/Leandro Wilke Alves de Melo CV.pdf', '_blank')}>Download CV</Button>
        <Button onClick={() => window.open('whatsapp://send?phone=+5581982352681')}>Entrar em contato</Button>
      </div>
    </section>
  );
}


// Componente responsável por exibir textos animados em sequência simulando digitação
function SequencedTypewriter() {
  // Controla o passo atual da animação
  const [step, setStep] = useState(0);
  // Textos a serem exibidos
  const text1 = "Olá eu sou o";
  const text2 = "Leandro Wilke";
  const text3 = "Desenvolvedor Front-End | React JS";
  // Velocidade de digitação e atraso entre textos
  const typeSpeed = 90;
  const delaySpeed = 500;

  // Efeito para avançar os passos da animação conforme o texto termina
  useEffect(() => {
    if (step === 0) {
      const totalTime = text1.length * typeSpeed + delaySpeed + 200;
      const timer = setTimeout(() => setStep(1), totalTime);
      return () => clearTimeout(timer);
    }
    if (step === 1) {
      const totalTime = text2.length * typeSpeed + delaySpeed + 200;
      const timer = setTimeout(() => setStep(2), totalTime);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <>
      {/* Primeira linha: apresentação */}
      <span className="block lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold text-[var(--color-react-text)] mt-2">
        <Typewriter
          words={[text1]}
          loop={1}
          cursor={false}
          typeSpeed={typeSpeed}
          deleteSpeed={50}
          delaySpeed={delaySpeed}
        />
      </span>
      {/* Segunda linha: nome */}
      {step >= 1 && (
        <span className="block lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-extrabold text-[var(--color-react-blue)] mt-2">
          <Typewriter
            words={[text2]}
            loop={1}
            cursor={false}
            typeSpeed={typeSpeed}
            deleteSpeed={50}
            delaySpeed={delaySpeed}
          />
        </span>
      )}
      {/* Terceira linha: profissão */}
      {step >= 2 && (
        <span className="block lg:text-2xl md:text-xl sm:text-xs text-lg font-medium text-gray-400 mt-2 mb-3">
          <Typewriter
            words={[text3]}
            loop={1}
            cursor={false}
            typeSpeed={typeSpeed}
            deleteSpeed={50}
            delaySpeed={delaySpeed}
          />
        </span>
      )}
    </>
  );
}
