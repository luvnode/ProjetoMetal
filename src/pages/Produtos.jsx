import { listaProdutos } from "../data/produtos_data";
import { useState } from "react";
import "../styles/Produtos.css";

export default function Produtos() {

    const [carrinho, setCarrinho] = useState([])
    function adicionarCarrinho(Produtos) {
        setCarrinho([...carrinho, Produtos])
       alert(`Foi adicionado ${Produtos.nome} no carrinho`)
    }
    return (
        <main className="coitaner">
            <h1 className="titulo">
                Produtos mais legais do mundo!
            </h1>

            <p className="subtitulo">
                Aqui você vai achar o item ideal para sua banda
            </p>

            {listaProdutos.map((Produtos) => (
                <div key={Produtos.id} className="coitanerCard">
                    <div className="Produtos_info_Grupo">
                        <img
                            src={Produtos.foto}
                            alt={Produtos.nome}
                            className="imgDoProduto"
                        />

                        <div>
                            <h3 className="ProdutoNome">
                                {Produtos.nome}
                            </h3>

                            <p className="ProdutoPreco">
                                {Produtos.preco}
                            </p>
                        </div>
                    </div>

                    <button
                        className="Produtobotao"
                        disabled={!Produtos.estoque}
                        onClick={() => adicionarCarrinho(Produtos)}
                    >
                        {Produtos.estoque ? "Adicionar" : "Remover"}
                    </button>
                </div>
            ))}
        </main>
    )
}