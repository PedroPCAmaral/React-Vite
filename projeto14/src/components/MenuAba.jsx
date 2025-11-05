import React, { useState } from "react";

export default function MenuAba() {
  const [abaAtual, setAbaAtual] = useState("Filmes");

  return (
    <div className="menu-container">
      <div className="menu-botoes">
        <button
          className={abaAtual === "Filmes" ? "ativo" : ""}
          onClick={() => setAbaAtual("Filmes")}
        >
          Filmes
        </button>
        <button
          className={abaAtual === "Séries" ? "ativo" : ""}
          onClick={() => setAbaAtual("Séries")}
        >
          Séries
        </button>
        <button
          className={abaAtual === "Minha Lista" ? "ativo" : ""}
          onClick={() => setAbaAtual("Minha Lista")}
        >
          Minha Lista
        </button>
      </div>

      <div className="texto-aba">
        <h2>Você está vendo: {abaAtual}</h2>
      </div>
    </div>
  );
}
