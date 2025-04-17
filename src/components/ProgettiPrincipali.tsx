import React from 'react';
import './ProgettiPrincipali.css';

const ProgettiPrincipali = () => {
  return (
    <div className="progetti-principali">
      <h2>Progetti Principali</h2>
      <p>Una selezione dei progetti a cui ho lavorato, dalla prototipazione di modelli IA alle applicazioni web orientate alla privacy.</p>
      <div className="progetti-card">
        <div className="progetto">
          <div className="progetto-type">Web App</div>
          <div className="progetto-title">BeFluent</div>
          <div className="progetto-description">
            Web app per l'assistenza ai bambini dislessici nell'apprendimento, con interfaccia adattiva e strumenti personalizzati per migliorare l'esperienza educativa.
          </div>
          <div className="progetto-tags">
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Express.js</span>
            <span>API</span>
            <span>UX/UI</span>
            <span>Accessibilità</span>
          </div>
        </div>
        <div className="progetto">
          <div className="progetto-type">Privacy System</div>
          <div className="progetto-title">POSD System</div>
          <div className="progetto-description">
            Soluzione privacy-oriented conforme al GDPR che integra privacy knowledge base, autenticazione sicura e gestione di privacy patterns in architettura MVC. Progettato con metodologie Agile/Scrum per garantire sicurezza e feedback continuo.
          </div>
          <div className="progetto-tags">
            <span>Java</span>
            <span>GDPR</span>
            <span>Sicurezza</span>
            <span>Agile</span>
            <span>Scrum</span>
            <span>MVC</span>
            <span>API</span>
            <span>Ingegneria del Software</span>
            <span>Privacy Patterns</span>
            <span>Privacy Knowledge Base</span>
            <span>Privacy by Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgettiPrincipali;