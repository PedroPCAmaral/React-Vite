import React, { useState } from "react";

function PainelJogo() {
  // Estados separados para cada jogador
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);

  // Funções que somam 1 ponto a cada jogador
  const adicionarPonto1 = () => setPontosJogador1(pontosJogador1 + 1);
  const adicionarPonto2 = () => setPontosJogador2(pontosJogador2 + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Painel de Pontuação</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Jogador 1: {pontosJogador1} pontos</h2>
        <button onClick={adicionarPonto1}>Adicionar ponto para Jogador 1</button>
      </div>

      <div>
        <h2>Jogador 2: {pontosJogador2} pontos</h2>
        <button onClick={adicionarPonto2}>Adicionar ponto para Jogador 2</button>
      </div>
    </div>
  );
}

export default PainelJogo;
