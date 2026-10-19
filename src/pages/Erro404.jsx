import { Link } from "react-router-dom"
import "../styles/Erro404.css"

export default function Erro404() {
  return (
    <main className="pagina-404">
      <div className="erro-404">

        <h1>404</h1>

        <h2>Ops! Seu caminho não existe.</h2>

        <p>
          Essa página não existe ou não foi encontrada.
          Verifique o endereço ou volte para a página inicial.
        </p>
        <Link to="/" className="botao-voltar"> Voltar para o início </Link>
      </div>
    </main>
  );
}