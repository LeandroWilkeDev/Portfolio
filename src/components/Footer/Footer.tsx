

// Componente de rodapé fixo exibido em todas as páginas
export default function Footer() {
  return (
    <footer className="w-full max-w-full fixed left-0 bottom-0 z-40 py-3 sm:py-4 bg-[var(--color-react-card)]/80 backdrop-blur-lg text-[var(--color-react-blue)] text-center border-t border-[var(--color-react-border)] footer-fade-in overflow-x-hidden box-border text-sm sm:text-base">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 gap-1 sm:gap-2">
        {/* Direitos autorais */}
        <span>
          &copy; {new Date().getFullYear()} Leandro Wilke. Todos os direitos reservados.
        </span>
        {/* Tecnologias utilizadas */}
        <span>
          Feito com <span className="text-[var(--color-react-blue)] font-bold">React</span> & <span className="text-[var(--color-react-cyan)] font-bold">Tailwind CSS</span>
        </span>
      </div>
    </footer>
  );
}
