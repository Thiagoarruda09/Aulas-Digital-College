import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [duvidas, setDuvidas] = React.useState([]);
  const [selecionada, setSelecionada] = React.useState('');

  const URL = 'http://admin.pedabete.app.br/api/faq';

  React.useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(dados => setDuvidas(dados))
      
  }, []);

  const Resposta = (elemento) => {
    const index = elemento.target.value;
    setSelecionada(duvidas[index]);
  };

  return (
    <div className='container'>
      <div className="row">
        <select onChange={Resposta}>
          <option value="">Selecione uma dúvida</option>
          {duvidas.map((cada, index) => (
            <option key={index} value={index}>
              {cada.question}
            </option>
          ))}
        </select>

        <div style={{ marginTop: "1rem" }}>
          <strong>Resposta: </strong>
          {selecionada ? selecionada.answer : 'Nenhuma dúvida selecionada.'}
        </div>
      </div>
    </div>
  );
}

export default App;