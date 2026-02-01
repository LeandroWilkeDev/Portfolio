


// Componente de avatar do usuário
export default function Avatar() {  
    return (
        <img
          src="/assets/foto de perfil.png"
          alt="Avatar de Leandro Wilke"
          className="bg-gradient-to-r from-[var(--color-react-blue)] via-[var(--color-react-blue-dark)] to-[var(--color-react-purple)] lg:w-60 lg:h-60 md:w-60 md:h-60 w-76 h-76 rounded-full border-4 border-cyan-400 shadow-xl shadow-purple-400/40 object-cover transition-transform duration-500 hover:scale-105"
        />
    );
}