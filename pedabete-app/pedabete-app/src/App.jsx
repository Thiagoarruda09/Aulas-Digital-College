import React from "react";
import IMG1 from "./assets/selecione.png";
import IMG2 from "./assets/resposta.png";
import IMG3 from "./assets/icon.png";

import "./App.css";

function App() {
  const [duvidas, setDuvidas] = React.useState([]);
  const [selecionada, setSelecionada] = React.useState(null);
  const [novaPergunta, setNovaPergunta] = React.useState("");
  const [novaResposta, setNovaResposta] = React.useState("");

  const URL = "http://admin.pedabete.app.br/api/faq";

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((dados) => setDuvidas(dados))
      .catch((err) => console.error("Erro ao buscar dúvidas:", err));
  }, []);

  const handleSelect = (e) => {
    const index = e.target.value;
    setSelecionada(duvidas[index]);
  };

  const adicionarDuvida = () => {
    const nova = {
      question: novaPergunta,
      answer: novaResposta,
    };

    setDuvidas((prev) => [...prev, nova]);

    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nova),
    })
      .then((res) => res.json())
      .then((dadoSalvo) => console.log("Salvo no servidor:", dadoSalvo))
      .catch((err) => console.error("Erro ao salvar:", err));

    setNovaPergunta("");
    setNovaResposta("");
  };

  const excluirDuvida = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao excluir dúvida no servidor.");
        }
      })
      .catch((erro) => {
        console.error("Erro ao excluir:", erro);
      });
  };

  return (
    <>
      <div className="container-fluid d-flex flex-row col-12">
        <div className="row col-2 nav">
          <ul className="g-3">
            <button
              className="btn btn-outline-light btn-sm mt-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Adicionar nova dúvida
            </button>
            <button
              className="btn btn-outline-light btn-sm mt-2"
              data-bs-toggle="modal"
              data-bs-target="#DuvidasModal"
            >
              Ver todas as duvidas
            </button>
          </ul>
        </div>
        <div className="row d-flex col-10 flex-column">
          <div className="col col-12 card card-body shadow d-flex flex-row">
            <div className="col offset-1">
              <h2>Selecione sua dúvida</h2>
              <img src={IMG1} alt="" width={250} />
            </div>
            <div className="col">
              <select
                onChange={handleSelect}
                className="form-select form-select-sm"
              >
                <option value="">Selecione uma dúvida</option>
                {duvidas.map((cada, index) => (
                  <option key={index} value={index}>
                    {cada.question}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <div className="col col-12 d-flex flex-row-reverse card card-body shadow">
            <div className="col">
              <h3>Confira a resposta de um profissional especializado</h3>
              <img src={IMG2} alt="" width={250} />
            </div>
            <div className="col offset-1 ">
              <strong>Resposta: </strong>
              {selecionada ? selecionada.answer : "Nenhuma dúvida selecionada."}
              <br />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="DuvidasModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content scroll">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Dúvidas frequentes
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table className="table-custom">
                <thead className=" stick mt-2">
                  <tr>
                    <th className="stick">duvida</th>
                    <th className="stick">resposta</th>
                    <th className="stick">autor</th>
                    <th className="stick">ações</th>
                  </tr>
                </thead>
                <tbody>
                  {duvidas.map((cada, index) => (
                    <tr>
                      <td key={index} value={index}>
                        {cada.question}
                      </td>
                      <td key={index} value={index}>
                        {cada.answer}
                      </td>
                      <td key={index} value={index}>
                        {cada.author}
                      </td>
                      <td>
                        <button className="btn btn-warning">editar</button>
                        <hr />
                        <button
                          className="btn btn-danger"
                          onClick={() => excluirDuvida(cada.id)}
                        >
                          excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Nova Dúvida</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  placeholder="Digite sua dúvida"
                  value={novaPergunta}
                  onChange={(e) => setNovaPergunta(e.target.value)}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  placeholder="Digite a resposta"
                  value={novaResposta}
                  onChange={(e) => setNovaResposta(e.target.value)}
                  className="form-control"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={adicionarDuvida}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
