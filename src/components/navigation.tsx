import '../favicon.ico'

export default function Nav() {
  return (
    <header>
      <nav>
        <a href="#inicio">
          <h1>SPACE STYLE</h1>
        </a>

        <ul>
          <li>
            <a href="#sobre">
              <h3>Sobre</h3>
            </a>
          </li>
          <li>
            <a href="#peças">
              <h3>Principais Peças</h3>
            </a>
          </li>
          <li>
            <a href="#duvidas">
              <h3>Dúvidas Frequentes</h3>
            </a>
          </li>
          <li>
            <a href="#contato">
              <h3>Contato</h3>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
