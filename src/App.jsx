import { BrowserRouter, Routes, HashRouter, Route } from "react-router-dom"
import "./styles/Global.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Erro404 from "./pages/Erro404"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"
import Sobre from "./pages/Sobre"
import Conta from "./pages/Conta"
import Carrinho from "./pages/Carrinho"

export default function App() {
  return (
    <HashRouter>
      <div className="App-container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/carrinho' element={<Carrinho />} />
          <Route path='/*' element={<Erro404 />} />
          <Route path='/conta' element={<Conta />} />
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>

  )
}