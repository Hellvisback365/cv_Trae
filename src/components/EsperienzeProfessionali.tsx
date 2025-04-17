import React from 'react';
import './EsperienzeProfessionali.css';

const EsperienzeProfessionali = () => {
  return (
    <div className="esperienze-professionali">
      <h2>Esperienze Professionali</h2>
      <p>Il mio percorso professionale nell'ambito dello sviluppo di intelligenza artificiale e applicazioni innovative.</p>
      <div className="esperienze-card">
        <div className="esperienza-wrapper">
          <div className="esperienza">
            <div className="esperienze-date">Marzo 2025 - Giugno 2025</div>
            <div className="esperienze-title">Sviluppatore IA</div>
            <div className="esperienze-location">LACAM-SWAP, Università di Bari</div>
            <div className="esperienze-description">
              <ul>
                <li>Progetto di tesi: Sistema di Raccomandazione Conversazionale Integrato con LLM</li>
                <li>Prototipazione in Python di modelli LLM locali (LLaMA, Mistral) tramite Hugging Face Transformers</li>
                <li>Orchestrazione multi-modello con LangChain (LLMChain, ChatOpenAI) e integrazione via OpenRouter API</li>
                <li>Sperimentazione modelli API (llama-4, mistral) per aumentare la diversità e robustezza delle risposte</li>
                <li>Ottimizzazione del prompt engineering e implementazione di esecuzione asincrona con caching</li>
              </ul>
            </div>
            <div className="esperienze-tags">
              <span>LLaMA</span>
              <span>Mistral</span>
              <span>LangChain</span>
              <span>Python</span>
              <span>NLP</span>
              <span>Hugging Face Transformers</span>
              <span>API</span>
              <span>Prompt engineering</span>
              <span>Prompt tuning</span>
              <span>Caching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsperienzeProfessionali;