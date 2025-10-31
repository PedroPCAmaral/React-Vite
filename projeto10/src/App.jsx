import { useState } from "react";
import "./App.css";

function App() {
  const [curtidas, setCurtidas] = useState(0);
  const [curtido, setCurtido] = useState(false);

  const handleCurtir = () => {
    if (curtido) {
      setCurtidas(c => c - 1);
    } else {
      setCurtidas(c => c + 1);
    }
    setCurtido(!curtido);
  };

  
  return (
    <div className="container">
      <div className="post">
        <img
          src="https://placedog.net/400/250"
          alt="Cachorro fofo"
          className="imagem-post"
        />
        <p className="legenda">Olha que cachorro mais fofo!</p>

        <button
          className={curtido ? "botao-curtido" : "botao"}
          onClick={handleCurtir}
        >
          {curtido ? "Curtido ❤️" : "Curtir 🤍"}
        </button> 

        <p className="contador">Curtidas: {curtidas}</p>
      </div>
    </div>
  );
}

export default App;
