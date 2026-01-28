
export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-[var(--color-react-blue)] text-white font-semibold rounded-md hover:bg-[var(--color-react-blue-dark)] transition-colors duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
}

