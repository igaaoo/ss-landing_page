export function Contato() {
  // Alerta na tela
  function alert() {
    window.alert('Obrigado por entrar em contato. Em breve retornaremos.')
  }

  return (
    <div className="mainBody" id="contato">
      <div className="insideBody">
        {/* Título da sessão */}
        <h3 className="titulo">Entre em contato</h3>

        {/* Formulários */}
        <div className="contatoForms">
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Completo"
                ></input>
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Email"></input>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputCidade"
                  placeholder="Cidade"
                ></input>
              </div>
              <div className="form-group col-md-4">
                <select id="inputState" className="form-control">
                  <option selected disabled>
                    Estado
                  </option>
                  <option>Ceará</option>
                  <option>São Paulo</option>
                  <option>Amazonas</option>
                  <option>Rio Grande do Sul</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputCep"
                  placeholder="CEP"
                ></input>
              </div>
            </div>
            <textarea
              className="form-control"
              id="textArea"
              placeholder="Digite sua mensagem aqui"
              rows={4}
            ></textarea>
          </form>
          <button type="button" className="btn btn-primary" onClick={() => alert()}>
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  )
}
