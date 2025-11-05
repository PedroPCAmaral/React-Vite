import React, { useState } from "react";

function FrasesMotivacionais() {
  const frases = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Nunca é tarde demais para ser o que você poderia ter sido.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "A persistência realiza o impossível.",
    "Você é mais forte do que imagina.",
    "Transforme seus sonhos em metas e suas metas em conquistas.",
    "Cada novo dia é uma nova oportunidade para recomeçar.",
    "Não espere por oportunidades. Crie-as!",
    "Coragem é agir mesmo com medo."
  ];

  const [indice, setIndice] = useState(0);

  const proximaFrase = () => {
    const novoIndice = Math.floor(Math.random() * frases.length);
    setIndice(novoIndice);
  };

  return (
    <div className="card-frase">
      <h1>💫 Frases Motivacionais 💫</h1>
      <p className="texto">"{frases[indice]}"</p>
      <button onClick={proximaFrase}>Próxima frase</button>
    </div>
  );
}

export default FrasesMotivacionais;
