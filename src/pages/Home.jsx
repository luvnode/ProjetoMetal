import Guitarra from "../assets/guitarra_vermelha.jfif"
import Card from '../components/Card'
import Palheta from "../assets/Palheta_hello.webp"
import Amplificador from "../assets/Amplificador_master.webp"
export default function Home() {
  return (
    <>
      <h1 style={{
        display:'flex',
        justifyContent:'center'
      }}>Bem vindo!</h1>
      <section style={{
        display: 'flex',
        gap:'20px',
        flexWrap: 'wrap',
        padding: '30px',
        alignItems: 'center',
        justifyContent:'center'
      }}>
        <Card
          titulo='Guitarras e baixos'
          imagem={Guitarra}
          descricao='Guitarras e baixos com o preço mais acessível do mercado'
        />
        <Card
          titulo='Palhetas'
          imagem={Palheta}
          descricao='Palhetas personalizadas com qualidade acima do padrão'
        />
        <Card
          titulo='Amplificador'
          imagem={Amplificador}
          descricao='Amplificadores para baixos e guitarras para você espalhar sua arte'
        />
      </section>
    </>
  )
}