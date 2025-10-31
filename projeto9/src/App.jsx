import { useState } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");

  const handleClick = () => {
    if (nome.trim() === "") {
      alert("Por favor, digite seu nome.");
    } else {
      alert(`Olá, ${nome}! Seja bem-vindo(a)!`);
      setNome(""); //  limpa o input
    }
  };


  return (
    <div className="container">
      <h2>Bem-vindo!</h2>

      <input
        type="text"
        className="input"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button className="botao" onClick={handleClick}>
        Enviar
      </button>

      
      {nome && <p className="mensagem">Você digitou: {nome}</p>}
    </div>
  );
}
 
export default App;
