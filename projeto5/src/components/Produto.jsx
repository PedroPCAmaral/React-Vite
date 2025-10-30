function Produto({ nome, preco, descricao }) {
  return (
    <div style={{
      border: "2px solid #007bff",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      width: "250px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.2)"
    }}>
      <h2>{nome}</h2>
      <p><strong>Preço:</strong> R$ {preco}</p>
      <p><em>{descricao}</em></p>
    </div>
  );
}

export default Produto;

