
// Importa StrictMode para detectar problemas no React
import { StrictMode } from 'react'
// Importa createRoot para renderizar a aplicação
import { createRoot } from 'react-dom/client'
// Importa estilos globais
import './index.css'
// Importa o componente principal da aplicação
import App from './App.tsx'

// Renderiza a aplicação React no elemento root
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
