import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './ProgettiPrincipali.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  hover: { scale: 1.03, boxShadow: '0 8px 24px rgba(100,108,255,0.15)' }
};

const progetti = [
  {
    type: 'Web App',
    title: 'BeFluent',
    description: 'Web app per l\'assistenza ai bambini dislessici nell\'apprendimento, con interfaccia adattiva e strumenti personalizzati per migliorare l\'esperienza educativa.',
    tags: ['Node.js','MongoDB','React','JavaScript','CSS','Express.js','API','UX/UI','Accessibilità']
  },
  {
    type: 'Privacy System',
    title: 'POSD System',
    description: 'Soluzione privacy-oriented conforme al GDPR che integra privacy knowledge base, autenticazione sicura e gestione di privacy patterns in architettura MVC.',
    tags: ['Java','GDPR','Sicurezza','Agile','Scrum','MVC','API','Ingegneria Software','Privacy Patterns','Privacy by Design']
  }
];

const ProgettiPrincipali = () => {
  useEffect(() => {
    const applyTheme = () => {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
    };
    applyTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', applyTheme);
    };
  }, []);

  return (
    <div className="progetti-principali">
      <h2>Progetti Principali</h2>
      <p>Una selezione dei progetti a cui ho lavorato, dalla prototipazione di modelli IA alle applicazioni web orientate alla privacy.</p>
      <motion.div
        className="progetti-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {progetti.map((p, i) => (
          <motion.div
            key={i}
            className="progetto"
            variants={itemVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <div className="progetto-type">{p.type}</div>
            <div className="progetto-title">{p.title}</div>
            <div className="progetto-description">{p.description}</div>
            <div className="progetto-tags">
              {p.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProgettiPrincipali;
