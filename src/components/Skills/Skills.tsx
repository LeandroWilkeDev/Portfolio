
// Importa hooks do React
import React, { useRef, useEffect, useState } from "react";
// Importa ícones das skills
import htmlIcon from "../../assets/html-5.svg";
import cssIcon from "../../assets/css3.svg";
import jsIcon from "../../assets/javascript.svg";
import tsIcon from "../../assets/typescript.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import gitIcon from "../../assets/git.svg";
import reactIcon from "../../assets/react.svg";
import sassIcon from "../../assets/sass.svg";
import styledIcon from "../../assets/styled-components.svg";
import githubIcon from "../../assets/github.svg";
// Importa estilos CSS Modules

import styles from "./Skills.module.scss";
import CircularProgress from "./CircularProgress";

// Mapeamento dos ícones e cores das skills para exibição
const skillIcons = {
  HTML: { src: htmlIcon, color: "#E44D26" },
  CSS: { src: cssIcon, color: "#1172B8" },
  JavaScript: { src: jsIcon, color: "#f7df1e" },
  TypeScript: { src: tsIcon, color: "#007ACC" },
  "Tailwind CSS": { src: tailwindIcon, color: "#44a8b3" },
  Git: { src: gitIcon, color: "#EE513B" },
  "React JS": { src: reactIcon, color: "#00D8FF" },
  Sass: { src: sassIcon, color: "#CD6799" },
  "Styled Components": { src: styledIcon, color: "#DB7093" },
  GitHub: { src: githubIcon, color: "#181717" },
};

// Importa biblioteca de animação AOS
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lista de skills e seus percentuais de domínio
const skills = [
  { name: "HTML", percent: 95 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "TypeScript", percent: 80 },
  { name: "Tailwind CSS", percent: 80 },
  { name: "Git", percent: 75 },
  { name: "React JS", percent: 85 },
  { name: "Sass", percent: 75 },
  { name: "Styled Components", percent: 70 },
  { name: "GitHub", percent: 80 },
];


// Hook customizado para detectar se o elemento está visível na tela
function useInView(ref: React.RefObject<HTMLDivElement>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}


// Componente principal da seção de Skills
export default function Skills() {
  // Referência para a seção de skills
  const sectionRef = useRef<HTMLDivElement>(null);
  // Detecta se a seção está visível na tela
  // @ts-ignore
  const inView = useInView(sectionRef as React.RefObject<HTMLDivElement>);

  // Inicializa animações AOS ao montar o componente
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Hook para animar o número da barra de skill
  function useAnimatedNumber(target: number, trigger: boolean, duration = 1000) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      if (!trigger) {
        setValue(0);
        return;
      }
      let current = 0;
      const increment = target / (duration / 16);
      const animate = () => {
        current += increment;
        if (current >= target) {
          setValue(target);
        } else {
          setValue(Math.round(current));
          requestAnimationFrame(animate);
        }
      };
      animate();
    }, [trigger, target, duration]);
    return value;
  }

  // Divide as skills em duas colunas para layout responsivo
  const half = Math.ceil(skills.length / 2);
  const leftSkills = skills.slice(0, half);
  const rightSkills = skills.slice(half);

  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center" ref={sectionRef} id="skills">
      {/* Título da seção */}
      <h2 className="text-6xl font-extrabold mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 to-purple-500 drop-shadow-lg section-title-shadow" data-aos-duration="1000" data-aos="fade-up">
        <span className="inline-block align-middle mr-2">🚀</span>
        Minhas Skills
      </h2>
      {/* Mobile: skills circulares */}
      <div className="w-full flex flex-col gap-8 items-center justify-center sm:hidden">
        <div className="grid grid-cols-2 gap-6 w-full max-w-xs mx-auto">
          {skills.map((skill, idx) => {
            const animatedPercent = useAnimatedNumber(skill.percent, inView, 1000);
            const icon = skillIcons[skill.name as keyof typeof skillIcons];
            return (
              <div key={skill.name} className="flex flex-col items-center justify-center gap-2" data-aos="fade-up" data-aos-delay={idx * 100}>
                <CircularProgress percent={animatedPercent} color={icon?.color || '#2563eb'} size={72} strokeWidth={7}>
                  <span>{animatedPercent}%</span>
                </CircularProgress>
                {icon && (
                  <img src={icon.src} alt={skill.name + ' icon'} style={{ width: 28, height: 28, minWidth: 28 }} />
                )}
                <span className="font-bold text-base text-center" style={{ color: 'var(--color-react-text)' }}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Desktop/tablet: barras lineares */}
      <div className="hidden sm:flex w-full flex-col md:flex-row gap-8 items-start justify-center">
        {/* Coluna da esquerda */}
        <div className="flex-1 flex flex-col gap-6">
          {leftSkills.map((skill, idx) => {
            const animatedPercent = useAnimatedNumber(skill.percent, inView, 1000);
            const icon = skillIcons[skill.name as keyof typeof skillIcons];
            return (
              <div key={skill.name} className={styles["skill-bar"]} data-aos="fade-right" data-aos-delay={idx * 100}>
                <div className={styles["skill-bar-labels"]}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {icon && (
                      <img src={icon.src} alt={skill.name + ' icon'} style={{ width: 32, height: 32, minWidth: 32 }} />
                    )}
                    <span className="font-bold text-lg" style={{ color: 'var(--color-react-text)' }}>{skill.name}</span>
                  </div>
                  <span className="font-bold text-lg" style={{ color: 'var(--color-react-blue)' }}>{animatedPercent}%</span>
                </div>
                <div className={styles["skill-bar-track"]}>
                  <div
                    className={styles["skill-bar-fill"]}
                    style={{
                      width: inView ? `${skill.percent}%` : "0%"
                    }}
                  ></div>
                  <div className={styles["skill-bar-glow"]}></div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Coluna da direita */}
        <div className="flex-1 flex flex-col gap-6">
          {rightSkills.map((skill, idx) => {
            const animatedPercent = useAnimatedNumber(skill.percent, inView, 1000);
            const icon = skillIcons[skill.name as keyof typeof skillIcons];
            return (
              <div key={skill.name} className={styles["skill-bar"]} data-aos="fade-left" data-aos-delay={idx * 100}>
                <div className={styles["skill-bar-labels"]}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {icon && (
                      <img src={icon.src} alt={skill.name + ' icon'} style={{ width: 32, height: 32, minWidth: 32 }} />
                    )}
                    <span className="font-bold text-lg" style={{ color: 'var(--color-react-text)' }}>{skill.name}</span>
                  </div>
                  <span className="font-bold text-lg" style={{ color: 'var(--color-react-blue)' }}>{animatedPercent}%</span>
                </div>
                <div className={styles["skill-bar-track"]}>
                  <div
                    className={styles["skill-bar-fill"]}
                    style={{
                      width: inView ? `${skill.percent}%` : "0%"
                    }}
                  ></div>
                  <div className={styles["skill-bar-glow"]}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
