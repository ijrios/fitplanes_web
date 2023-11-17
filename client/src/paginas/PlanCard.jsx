// PlanCard.jsx
import React from 'react';

const PlanCard = ({ title, training, nutrition }) => (
  <header className="bg-zinc-800 p-4 rounded-lg bg-opacity-50 w-120 h-120 flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-sm font-bold mb-2">{title}</h2>
      <div>
        <h3 className="font-bold mb-1">Entrenamiento:</h3>
        <ul className="list-disc ml-6 text-xs">
          {training.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-1">Alimentación:</h3>
        <ul className="list-disc ml-6 text-xs">
          {nutrition.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </header>
);

export default PlanCard;
