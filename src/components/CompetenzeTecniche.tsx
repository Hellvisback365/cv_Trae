import React, { useEffect, useRef } from 'react';
import './CompetenzeTecniche.css';

interface Skill {
  name: string;
  percentage: number;
}

interface Category {
  title: string;
  skills: Skill[];
}

const CompetenzeTecniche: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  const categories: Category[] = [
    {
      title: "Intelligenza Artificiale",
      skills: [
        { name: "Python", percentage: 80 },
        { name: "LangChain", percentage: 80 },
        { name: "NLP", percentage: 80 },
        { name: "LLMs", percentage: 80 },
        { name: "Prompt Engineering", percentage: 90 },
        { name: "Hugging Face", percentage: 80 },
        { name: "API", percentage: 90 },
        { name: "Prompt Tuning", percentage: 90 },
        { name: "Caching", percentage: 80 },
        { name: "TensorFlow", percentage: 40 },
        { name: "PyTorch", percentage: 80 },
        { name: "Scikit-learn", percentage: 40 },
      ]
    },
    {
      title: "Sicurezza e Privacy",
      skills: [
        { name: "GDPR Compliance", percentage: 80 },
        { name: "Data Protection", percentage: 70 },
      ]
    },
    {
      title: "Sviluppo Web / Software",
      skills: [
        { name: "Node.js", percentage: 80 },
        { name: "MongoDB", percentage: 80 },
        { name: "React", percentage: 80 },
        { name: "API", percentage: 80 },
        { name: "JavaScript", percentage: 80 },
        { name: "CSS", percentage: 80 },
        { name: "Express.js", percentage: 80 },
        { name: "Java", percentage: 80 },
        { name: "C#", percentage: 80 },
        { name: "Vite", percentage: 80 },
        { name: "HTML", percentage: 80 },
      ]
    },
    {
      title: "Strumenti e Metodologie",
      skills: [
        { name: "Git/GitHub", percentage: 90 },
        { name: "Agile/Scrum", percentage: 70 },
        { name: "Postman", percentage: 60 },
      ]
    },
    {
      title: "Database e Backend",
      skills: [
        { name: "MySQL", percentage: 80 },
        { name: "MongoDB", percentage: 80 },
        { name: "SQL", percentage: 80 },
        { name: "NoSQL", percentage: 80 },
      ]
    },
    {
      title: "Lingue",
      skills: [
        { name: "Inglese", percentage: 40 },
        { name: "Italiano", percentage: 100 },
      ]
    }
  ];

  // Setup Intersection Observer
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    // Observe categories
    categoriesRef.current.forEach(category => {
      if (category) observer.observe(category);
    });

    return () => {
      categoriesRef.current.forEach(category => {
        if (category) observer.unobserve(category);
      });
    };
  }, []);

  return (
    <div className="competenze-tecniche" ref={sectionRef}>
      <h2>Competenze Tecniche</h2>
      <p>Le mie competenze tecniche nelle aree dell'IA, sviluppo web e tecnologie correlate.</p>
      
      <div className="competenze-categorie">
        {categories.map((category, idx) => (
          <div 
          className="categoria fade-in-view" 
          key={idx}
          ref={(el: HTMLDivElement | null) => {
            categoriesRef.current[idx] = el;
          }}
        >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIdx) => (
                <li 
                  key={skillIdx} 
                  data-percentage={`${skill.percentage}%`}
                >
                  {skill.name}
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompetenzeTecniche;