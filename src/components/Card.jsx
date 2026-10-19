import "../styles/Card.css"
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="card">
      <h2 className="card-titulo">{props.titulo}</h2>
      <img className="img-card" src={props.imagem} alt="" />
      <p className="descricao">{props.descricao}</p>
      <p className="preco">{props.preco}</p>
      <Link className='butao' to="/produtos" >Comprar</Link>
    </div>
  );
}