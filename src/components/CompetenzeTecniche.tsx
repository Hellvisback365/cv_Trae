import React from 'react';
import './CompetenzeTecniche.css';

const CompetenzeTecniche = () => {
  return (
    <div className="competenze-tecniche">
      <h2>Competenze Tecniche</h2>
      <p>Le mie competenze tecniche nelle aree dell'IA, sviluppo web e tecnologie correlate.</p>
      <div className="competenze-categorie">
        <div className="categoria">
          <h3>Intelligenza Artificiale</h3>
          <ul>
            <li>Python - 80%</li>
            <li>LangChain - 80%</li>
            <li>NLP - 80%</li>
            <li>LLMs - 80%</li>
            <li>Prompt Engineering - 90%</li>
            <li>Hugging Face Transformers - 80%</li>
            <li>API - 90%</li>
            <li>Prompt Tuning - 90%</li>
            <li>Caching - 80%</li>
            <li>TensorFlow - 40%</li>
            <li>PyTorch - 80%</li>
            <li>Scikit-learn - 40%</li>
          </ul>
        </div>
        <div className="categoria">
          <h3>Sicurezza e Privacy</h3>
          <ul>
            <li>GDPR Compliance - 80%</li>
            <li>Data Protection - 70%</li>
          </ul>
        </div>
        <div className="categoria">
          <h3>Sviluppo Web / Software</h3>
          <ul>
            <li>Node.js - 80%</li>
            <li>MongoDB - 80%</li>
            <li>React - 80%</li>
            <li>API - 80%</li>
            <li>JavaScript - 80%</li>
            <li>CSS - 80%</li>
            <li>Express.js - 80%</li>
            <li>Java - 80%</li>
            <li>C# - 80%</li>
            <li>Vite - 80%</li>
            <li>HTML - 80%</li>
          </ul>
        </div>
        <div className="categoria">
          <h3>Strumenti e Metodologie</h3>
          <ul>
            <li>Git/GitHub - 90%</li>
            <li>Agile/Scrum - 70%</li>
            <li>Postman - 60%</li>
          </ul>
        </div>
        <div className="categoria">
          <h3>Database e Backend</h3>
          <ul>
            <li>MySQL - 80%</li>
            <li>MongoDB - 80%</li>
            <li>SQL - 80%</li>
            <li>NoSQL - 80%</li>
          </ul>
        </div>
        <div className="categoria">
          <h3>Lingue</h3>
          <ul>
            <li>Inglese - 40%</li>
            <li>Italiano - 100%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetenzeTecniche;