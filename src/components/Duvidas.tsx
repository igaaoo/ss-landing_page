export function Duvidas() {
  return (
    <div className="mainBody" id="duvidas">
      <div className="insideBody">
        {/* Título da sessão */}
        <h3 className="titulo">Dúvidas Frequentes</h3>

        {/* Cards de dúvidas */}
        <div className="colapsoDuvidas">
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Como é realizada a compra de um traje?
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Para que a compra seja efetuada, é necessário que o cliente entre em
                  contato pelo formúlario abaixo, informando endereço e métodos de contato
                  para possível retorno. Além disso, informar o nome do traje e o tamanho,
                  disponíveis para CRIANÇAS e ADULTOS, totalmente ajustáveis.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Como é calculado o frete para o meu pedido?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  O valor do frete é calculado automaticamente através de um aplicativo de
                  geolocalização, a partir dos produtos selecionados e do CEP da entrega
                  do Cliente. A informação do valor do frete já calculado para determinado
                  endereço e produtos será disponibilizado para o cliente no momento da
                  compra.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Posso confiar na qualidade do traje?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Os trajes vendidos pela Space Style são amplamente testados em diversos
                  ambientes espaciais. A segurança e o conforto é garantido para qualquer
                  peça exposta. Caso algum defeito seja detectado, o cliente poderá entrar
                  em contato através do formulário abaixo, informando o problema e o
                  número do pedido.
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Quais são os meios de pagamento?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  A equipe aceitará pagamentos através dos sistemas de Cartões de Crédito
                  ( todas as bandeiras), Boleto Bancário e PIX. No futuro, a Space Style
                  pretende adotar outros meios de pagamento. Essas mudanças serão
                  divulgadas em nosso Site e informadas para ex-compradores.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
