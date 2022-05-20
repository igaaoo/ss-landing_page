import '../favicon.ico'

export default function Nav() {
  return (
    <header>
      <nav>
        <a href="#inicio">
          <h2>SPACE STYLE</h2>
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

        <h2 className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <p>MENU</p>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="#sobre">
              Sobre
            </a>
            <a className="dropdown-item" href="#peças">
              Principais Peças
            </a>
            <a className="dropdown-item" href="#duvidas">
              Dúvidas Frequentes
            </a>
            <a className="dropdown-item" href="#contato">
              Contato
            </a>
          </div>
        </h2>
      </nav>
    </header>
  )
}
