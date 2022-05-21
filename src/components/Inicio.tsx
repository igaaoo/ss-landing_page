export function Inicio() {
  return (
    <div className="mainBody" id="inicio">
      <div className="insideBody">
        {/* Descrição */}
        <div className="descricaoInicio">
          <h2>A loja de trajes espaciais em que você pode confiar</h2>
          <h3>
            A Space Style disponibiliza o melhor para você em roupas desenvolvidos com as
            últimas tecnologias do mercado.{' '}
          </h3>

          {/* Botão para acessar as peças */}
          <a
            href="#peças"
            className="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Conheça as principais peças
          </a>
        </div>
      </div>
    </div>
  )
}
