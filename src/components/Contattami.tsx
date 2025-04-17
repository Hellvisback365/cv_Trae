import React, { useState } from "react";
import "./Contattami.css";

const Contattami: React.FC = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: ""
  });
  const [inviato, setInviato] = useState(false);
  const [errore, setErrore] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrore("");
    setInviato(false);
    // Placeholder per futura integrazione API Brevo
    setTimeout(() => {
      setInviato(true);
    }, 800);
  };

  return (
    <section className="contattami-section">
      <h2>Contattami</h2>
      <p className="contattami-intro">Hai un progetto interessante o vuoi saperne di più sulle mie competenze? Contattami!</p>
      <div className="contattami-container">
        <form className="contattami-form" onSubmit={handleSubmit}>
          <label>Nome
            <input type="text" name="nome" placeholder="Il tuo nome" value={form.nome} onChange={handleChange} required />
          </label>
          <label>Email
            <input type="email" name="email" placeholder="La tua email" value={form.email} onChange={handleChange} required />
          </label>
          <label>Oggetto
            <input type="text" name="oggetto" placeholder="Oggetto del messaggio" value={form.oggetto} onChange={handleChange} required />
          </label>
          <label>Messaggio
            <textarea name="messaggio" placeholder="Il tuo messaggio" value={form.messaggio} onChange={handleChange} required rows={5} />
          </label>
          <button type="submit" className="contattami-btn">Invia Messaggio</button>
          {inviato && <div className="contattami-success">Messaggio inviato! Grazie per avermi contattato.</div>}
          {errore && <div className="contattami-error">{errore}</div>}
        </form>
        <div className="contattami-info">
          <h3>Informazioni di Contatto</h3>
          <div className="contattami-info-row">
            <span className="contattami-info-icon">📧</span>
            <div>
              <div className="contattami-info-label">Email</div>
              <div className="contattami-info-value">vitopiccolini@live.it</div>
            </div>
          </div>
          <div className="contattami-info-row">
            <span className="contattami-info-icon">📍</span>
            <div>
              <div className="contattami-info-label">Località</div>
              <div className="contattami-info-value">Bari, Italia</div>
            </div>
          </div>
          <div className="contattami-info-row">
            <span className="contattami-info-icon">🌐</span>
            <div>
              <div className="contattami-info-label">Social</div>
              <div className="contattami-info-social">
                <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div className="contattami-disponibilita">
            <div className="contattami-info-label">Disponibilità</div>
            <div className="contattami-info-value">Attualmente sono disponibile per collaborazioni full-time e part-time nell'ambito dello sviluppo di intelligenza artificiale e applicazioni web innovative.</div>
            <div className="contattami-disponibile"><span className="dot-verde"></span> Disponibile per nuovi progetti</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contattami;