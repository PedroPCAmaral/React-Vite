// src/App.jsx
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="cards-container">
        <Card 
          titulo="Usuários Ativos" 
          numero="1.245" 
          descricao="Pessoas logadas hoje" 
        />
        <Card 
          titulo="Vendas" 
          numero="328" 
          descricao="Transações realizadas" 
        />
        <Card 
          titulo="Tickets Abertos" 
          numero="47" 
          descricao="Chamados pendentes no suporte" 
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
