import imgLogo from "../assets/metalica_icon.png"
import { Link } from "react-router-dom"
import "../styles/Header.css"

export default function Header(){
    return(
        <header className="cabecalho">
           <Link to="/"> <img src={ imgLogo } alt="" /> </Link> 
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/carrinho">Carrinho</Link></li>
                    <li><Link to="/conta">Minha conta</Link></li>
                    <li><Link to="/sobre">Sobre nós</Link></li>
                </ul>
            </nav>
        </header>
    )
}