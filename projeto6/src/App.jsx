import React, { useState } from "react";
import Tela from "./components/Tela";

function App() {
  // Estado para armazenar o tema atual
  const [tema, setTema] = useState("claro");

  // Função para alternar o tema
  const alternarTema = () => {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  };

  return (
    <>
      <button
        onClick={alternarTema}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: tema === "claro" ? "#333" : "#f5f5f5",
          color: tema === "claro" ? "#fff" : "#000",
          transition: "all 0.3s ease"
        }}
      >
        Alternar para {tema === "claro" ? "escuro" : "claro"}
      </button>

      {/* Passando o tema como prop para Tela */}
      <Tela tema={tema} />
    </>
  );
}

export default App;
