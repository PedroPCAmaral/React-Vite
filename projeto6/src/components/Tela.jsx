import React from "react";

function Tela({ tema }) {
  // Estilos de acordo com o tema recebido via props
  const estilo = {
    backgroundColor: tema === "claro" ? "#f5f5f5" : "#1e1e1e",
    color: tema === "claro" ? "#000" : "#fff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease"
  };

  return (
    <div style={estilo}>
      <h1>Tema {tema === "claro" ? "Claro 🌞" : "Escuro 🌙"}</h1>
      <p>O tema atual da página é: <strong>{tema}</strong></p>
    </div>
  );
}

export default Tela;
