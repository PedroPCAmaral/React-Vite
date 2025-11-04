import { useState } from "react";
import "./App.css";

function App() {
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState([]);

  // Adiciona nova tarefa
  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return;
    const novaTarefa = {
      id: Date.now(),
      texto: tarefa,
      concluida: false,
    };
    setLista([...lista, novaTarefa]);
    setTarefa("");
  };

  // Marca/desmarca como concluída
  const alternarConclusao = (id) => {
    const novaLista = lista.map((item) =>
      item.id === id ? { ...item, concluida: !item.concluida } : item
    );
    setLista(novaLista);
  };

  // Remove tarefa
  const removerTarefa = (id) => {
    const novaLista = lista.filter((item) => item.id !== id);
    setLista(novaLista);
  };

  return (
    <div className="container">
      <h1>📝 Mini Lista de Tarefas</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul className="lista-tarefas">
        {lista.map((item) => (
          <li key={item.id} className={item.concluida ? "concluida" : ""}>
            <span onClick={() => alternarConclusao(item.id)}>
              {item.texto}
            </span>
            <button className="remover" onClick={() => removerTarefa(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
