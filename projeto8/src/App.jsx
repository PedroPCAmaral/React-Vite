import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Formulário Simples</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          Enviar
        </button>
      </form>

      
      {nome && <p>Você digitou: {nome}</p>}
    </div>
  );
}

export default App;
