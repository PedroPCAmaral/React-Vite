import React, { useState } from "react";

function ContadorCliques() {
  //guarda o número de cliques
  const [cliques, setCliques] = useState(0);

  //aumentar o contador
  const aumentarCliques = () => {
    setCliques(cliques + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Contador de Cliques</h2>
      <p>Você clicou {cliques} vezes</p>
      <button onClick={aumentarCliques}>Clique Aqui</button>
    </div>
  );
}

export default ContadorCliques;
