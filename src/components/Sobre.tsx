import SobreImg from '../images/sobreImg2.jpg'

export function Sobre() {
  return (
    <div className="mainBody" id="sobre">
      <div className="insideBody">
        {/* Título da sessão */}
        <h3 className="titulo">Sobre nós</h3>

        {/* Descrição da empresa */}
        <div className="sobreDescricao">
          <h2>
            A Space Style é <strong> líder </strong> número <strong>#1</strong> no mercado
            de trajes espaciais
          </h2>
          <p>
            Da fábrica ao seu corpo, a gente cuida da qualidade dos trajes em todo o
            processo. O nosso compromisso é facilitar a exploração espacial. Expandindo os
            limites da humanidade e garantindo um universo ainda melhor para nossa
            espécie.
          </p>

          {/* Botão para entrar em contato */}
          <a
            href="#contato"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Entre em contato
          </a>
        </div>
        <img
          src={SobreImg}
          alt="Imagem Cientista projetando Traje"
          className="sobreImg"
        />
      </div>
    </div>
  )
}
