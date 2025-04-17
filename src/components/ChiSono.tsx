import React from "react";
import "../App.css";

const ChiSono = () => {
  return (
    <section className="chisono-section">
      <div className="chisono-container">
        <div className="chisono-card">
          <div className="chisono-img-wrapper">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Vito Piccolini"
              className="chisono-img"
            />
          </div>
          <div className="chisono-card-info">
            <span className="chisono-nome">Vito Piccolini</span>
            <span className="chisono-ruolo">AI Developer</span>
            <div className="chisono-social">
              <a href="#" aria-label="LinkedIn" className="chisono-social-icon">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
              <a href="#" aria-label="Email" className="chisono-social-icon">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-7.065v14h23.97v-14l-11.985 7.065zm11.985-9.065h-23.97l11.985 7.065 11.985-7.065z"/></svg>
              </a>
              <a href="#" aria-label="Portfolio" className="chisono-social-icon">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm-1-17h2v2h-2zm0 4h2v10h-2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="chisono-descrizione">
          <h2><span style={{color: "#7faaff"}}>Chi</span> Sono</h2>
          <p className="chisono-titolo">Sviluppatore IA con passione per l'innovazione</p>
          <p className="chisono-testo">
            Sviluppatore AI in formazione, con esperienza nella progettazione e prototipazione di applicazioni basate su modelli linguistici di ultima generazione.<br/>
            Durante il mio tirocinio accademico ho integrato LLM locali (LLaMA, Mistral) in sistemi di raccomandazione conversazionale, migliorando le performance attraverso tecniche di caching, chaining e prompt tuning.<br/>
            <br/>
            Solide competenze in Python, LangChain, NLP e architettura di backend (Node.js, MongoDB).<br/>
            Cerco un'opportunità per contribuire allo sviluppo di soluzioni AI orientate all'utente, sfruttando l'ecosistema open-source e le potenzialità dei modelli generativi.
          </p>
          <div className="chisono-extra">
            <div className="chisono-formazione">
              <span className="chisono-extra-titolo">Formazione</span>
              <ul>
                <li>Università di Bari Aldo Moro, Informatica</li>
              </ul>
            </div>
            <div className="chisono-interessi">
              <span className="chisono-extra-titolo">Interessi</span>
              <ul>
                <li>Intelligenza Artificiale</li>
                <li>Natural Language Processing</li>
                <li>Privacy e GDPR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSono;