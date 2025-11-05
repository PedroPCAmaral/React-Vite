import { useState } from "react";

function PainelNotificacoes() {
  const [mostrar, setMostrar] = useState(false);

  const alternarPainel = () => {
    setMostrar(!mostrar);
  };

  return (
    <div className="container">
      <button className="botao" onClick={alternarPainel}>
        {mostrar ? "Esconder Notificações" : "Mostrar Notificações"}
      </button>

      {mostrar && (
        <div className="painel">
          <p>Você não tem novas notificações</p>
        </div>
      )}
    </div>
  );
}

export default PainelNotificacoes;
