import Produto from "./components/Produto";

function App() {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      gap: "20px",
      flexWrap: "wrap",
      padding: "20px"
    }}>
      <Produto 
        nome="Notebook Gamer"
        preco="5.999,00"
        descricao="Notebook potente com placa de vídeo dedicada e 16GB de RAM."
      />

      <Produto 
        nome="Smartphone X10"
        preco="2.499,00"
        descricao="Celular com ótima câmera e bateria de longa duração."
      />

      <Produto 
        nome="Fone Bluetooth"
        preco="299,00"
        descricao="Fones sem fio com cancelamento de ruído e som de alta qualidade."
      />
    </div>
  );
}

export default App;

