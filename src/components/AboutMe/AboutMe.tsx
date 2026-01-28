import Avatar from '../Avatar/Avatar.tsx';
import Button from '../Button/Button.tsx';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center text-center min-h-screen">
      <div className="relative mb-4 mt-4 w-full max-w-full flex justify-center items-center">
        <Avatar />
      </div>
      <div className="mb-2">
        <SequencedTypewriter />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button onClick={() => window.open('/LeandroWilkeCV.pdf', '_blank')}>Download CV</Button>
        <Button onClick={() => window.open('mailto:leandro@email.com')}>Entrar em contato</Button>
      </div>
    </section>
  );
}

function SequencedTypewriter() {
  const [step, setStep] = useState(0);
  const text1 = "Olá eu sou o";
  const text2 = "Leandro Wilke";
  const text3 = "Desenvolvedor Front-End | React JS";
  const typeSpeed = 90;
  const delaySpeed = 500;

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
      <span className="block text-4xl md:text-5xl font-semibold text-[var(--color-react-text)] mt-2">
        <Typewriter
          words={[text1]}
          loop={1}
          cursor={false}
          typeSpeed={typeSpeed}
          deleteSpeed={50}
          delaySpeed={delaySpeed}
        />
      </span>
      {step >= 1 && (
        <span className="block text-4xl md:text-5xl font-extrabold text-[var(--color-react-blue)] mt-2">
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
      {step >= 2 && (
        <span className="block text-lg md:text-xl font-medium text-gray-400 mt-2 mb-6">
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
