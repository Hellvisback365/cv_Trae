import "./App.css";
import NeuralBackground from "./components/NeuralBackground";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import ChiSono from "./components/ChiSono";
import EsperienzeProfessionali from "./components/EsperienzeProfessionali";
import ProgettiPrincipali from "./components/ProgettiPrincipali";
import CompetenzeTecniche from "./components/CompetenzeTecniche";
import Contattami from "./components/Contattami";

function App() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <>
      <Navbar />
      <div className="cv-hero" id="home">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? (
            <svg className="icon-sun-wow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="18" fill="#ffe066" filter="url(#glow)" />
              <g stroke="#ffe066" strokeWidth="4" strokeLinecap="round">
                <line x1="36" y1="6" x2="36" y2="18" />
                <line x1="36" y1="54" x2="36" y2="66" />
                <line x1="6" y1="36" x2="18" y2="36" />
                <line x1="54" y1="36" x2="66" y2="36" />
                <line x1="14.39" y1="14.39" x2="25.45" y2="25.45" />
                <line x1="57.61" y1="57.61" x2="46.55" y2="46.55" />
                <line x1="14.39" y1="57.61" x2="25.45" y2="46.55" />
                <line x1="57.61" y1="14.39" x2="46.55" y2="25.45" />
              </g>
              <defs>
                <filter id="glow" x="0" y="0" width="72" height="72" filterUnits="userSpaceOnUse">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          ) : (
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon-moon-wow"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.787 3.448-8.747 8.024-9.59a.75.75 0 0 1 .826.986 7.25 7.25 0 1 0 8.532 8.532.75.75 0 0 1 .986.826z"
  />
</svg>


          
          )}
        </button>
        {/* {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" stroke="none">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffe066" stroke="#ffe066">
              <circle cx="12" cy="12" r="4" />
              <g>
                <line x1="12" y1="2" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="20" x2="12" y2="22" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="12" x2="4" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
          )} */}
        <NeuralBackground 
          color={theme === 'dark' ? "rgba(100, 108, 255, 0.5)" : "rgba(100, 108, 255, 0.7)"} 
          particleCount={80} 
        />
        <div className="cv-hero-content">
        <div className="cv-header">
          <span className="cv-brand">VP.it</span>
          <span className="cv-hello">Ciao, mi chiamo</span>
        </div>
        <h1>
          <span className="cv-name-bold">Vito</span> <span className="cv-name">Piccolini</span>
        </h1>
        <h2 className="cv-role">
          Sviluppatore IA <span className="cv-role-highlight">emergente</span>
        </h2>
        <p className="cv-description">
          Focalizzato su modelli linguistici e sistemi di raccomandazione. Cerco opportunità per applicare le mie competenze in Python, LangChain e NLP a progetti sfidanti.<br />
          Guarda cosa so fare.
        </p>
        <div className="cv-buttons">
          <button className="cv-btn cv-btn-primary">Contattami</button>
          <button className="cv-btn cv-btn-secondary">Vedi i miei progetti</button>
        </div>
      </div>
      </div>
      <div id="chi-sono">
        <ChiSono />
      </div>
      <div id="esperienze">
        <EsperienzeProfessionali />
      </div>
      <div id="progetti">
        <ProgettiPrincipali />
      </div>
      <div id="skills">
        <CompetenzeTecniche />
        <Contattami />
      </div>
      <div id="contatti">
        {/* Inserisci qui la sezione Contatti */}
      </div>
    </>
  );
}

export default App;
