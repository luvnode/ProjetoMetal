import { useState } from "react"
import { listaContas } from "../data/Conta_data"
import "../styles/Conta.css"

export default function Conta() {
    const [contaAtual, setContaAtual] = useState(0)

    function trocarConta() {
        setContaAtual((atual) => 
            (atual + 1) % listaContas.length
        )
    }

    const Conta = listaContas[contaAtual]

    return (
        <div className="container2">
            <div className="coitanerConta">
                <div className="img">
                    <img
                        src={Conta.img}
                        alt={Conta.nome}
                        className="foto"
                    />
                </div>

                <div className="descricao">
                    <h1 className="saudacao">
                        Bem-vindo {Conta.nome}!
                    </h1>

                    <p className="email">
                        Seu email: {Conta.email}
                    </p>
                </div>

                <button onClick={trocarConta}>
                    Trocar de conta
                </button>
            </div>
        </div>
    )
}