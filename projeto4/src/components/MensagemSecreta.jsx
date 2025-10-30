import React, { useState } from "react";

function MensagemSecreta() {
  const [visivel, setVisivel] = useState(false);

  const alternarMensagem = () => {
    setVisivel(!visivel);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mensagem Secreta</h1>
      <button onClick={alternarMensagem}>
        {visivel ? "Esconder Mensagem" : "Mostrar Mensagem"}
      </button>
      {visivel && <p style={{ marginTop: "20px" }}> Esta é a mensagem secreta!</p>}
    </div>
  );
}

export default MensagemSecreta;
