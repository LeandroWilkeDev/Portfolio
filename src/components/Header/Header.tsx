
const socialLinks = [
  { href: "https://github.com/leandrowilke", icon: "github", label: "GitHub" },
  { href: "https://linkedin.com/in/leandrowilke", icon: "linkedin", label: "LinkedIn" },
  { href: "https://instagram.com/leandrowilke", icon: "instagram", label: "Instagram" },
];

export default function Header() {
  return (
    <header data-aos-duration="1000" data-aos="fade-down" className="w-full max-w-full bg-[var(--color-react-card)]/80 backdrop-blur-lg fixed top-0 left-0 z-50 shadow-md border-b border-[var(--color-react-border)] flex items-center justify-between py-5 px-20  overflow-x-hidden box-border">
        <span className="font-extrabold text-2xl bg-gradient-to-r from-[var(--color-react-blue)] via-[var(--color-react-cyan)] to-[var(--color-react-purple)] bg-clip-text text-transparent drop-shadow-lg tracking-tight">
          Leandro Wilke
        </span>
        <nav className="flex gap-8">
          <a href="#about" className="bg-gradient-to-r from-[var(--color-react-blue)] via-[var(--color-react-cyan)] to-[var(--color-react-purple)] bg-clip-text text-transparent drop-shadow-lg tracking-tight transition nav-underline">Sobre mim</a>
          <a href="#skills" className="bg-gradient-to-r from-[var(--color-react-blue)] via-[var(--color-react-cyan)] to-[var(--color-react-purple)] bg-clip-text text-transparent drop-shadow-lg tracking-tight transition nav-underline">Skills</a>
          <a href="#projects" className="bg-gradient-to-r from-[var(--color-react-blue)] via-[var(--color-react-cyan)] to-[var(--color-react-purple)] bg-clip-text text-transparent drop-shadow-lg tracking-tight transition nav-underline">Projetos</a>
        </nav>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group transition"
            >
              {link.icon === "github" && (
                <svg className="w-6 h-6 text-white group-hover:text-[#181717] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              )}
              {link.icon === "linkedin" && (
                <svg className="w-6 h-6 text-white group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
              )}
              {link.icon === "instagram" && (
                <svg className="w-6 h-6 text-white group-hover:text-[#E4405F] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 0 1 1.77 1.08 4.92 4.92 0 0 1 1.08 1.77c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 0 1-1.08 1.77 4.92 4.92 0 0 1-1.77 1.08c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 0 1-1.77-1.08 4.92 4.92 0 0 1-1.08-1.77c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43a4.92 4.92 0 0 1 1.08-1.77A4.92 4.92 0 0 1 5.54 2.68c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.51a6.92 6.92 0 0 0-2.51 1.64A6.92 6.92 0 0 0 .58 4.14c-.27.75-.452 1.63-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.16.51 2.91a6.92 6.92 0 0 0 1.64 2.51 6.92 6.92 0 0 0 2.51 1.64c.75.27 1.63.452 2.91.51C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.28-.058 2.16-.24 2.91-.51a6.92 6.92 0 0 0 2.51-1.64 6.92 6.92 0 0 0 1.64-2.51c.27-.75.452-1.63.51-2.91.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.24-2.16-.51-2.91a6.92 6.92 0 0 0-1.64-2.51A6.92 6.92 0 0 0 19.86.58c-.75-.27-1.63-.452-2.91-.51C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
              )}
            </a>
          ))}
        </div>
    </header>
  );
}
