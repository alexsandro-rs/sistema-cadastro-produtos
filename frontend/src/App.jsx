import { useState } from "react" // Removemos o useEffect, pois não vamos mais buscar dados ao carregar
import Login from "./components/Login"
import CadastroProduto from "./components/CadastroProduto"
// Removemos a importação da ListaProdutos aqui

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(false)
  const [nomeUsuario, setNomeUsuario] = useState("") 
  // Removemos o estado 'produtos'

  // Removemos a função 'buscarProdutos' e o 'useEffect'
  // O formulário continua enviando para o Python, mas o App não se preocupa mais em ler a volta.

  const fazerLogout = () => {
    setUsuarioLogado(false)
    setNomeUsuario("") 
  }

  const handleLoginSucesso = (nome) => {
    setNomeUsuario(nome)
    setUsuarioLogado(true)
  }

  return (
    <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center justify-center p-8 gap-8">
      
      {!usuarioLogado ? (
        <Login onLoginSucesso={handleLoginSucesso} />
      ) : (
        // Removemos o fragmento (<>...</>) pois agora só temos um elemento filho
        <div className="w-full flex justify-center">
            {/* Removemos a propriedade 'onProdutoCadastrado', pois não precisamos atualizar nada */}
            <CadastroProduto 
              nomeUsuario={nomeUsuario}
              onLogout={fazerLogout}
            />
        </div>
        // A <ListaProdutos /> foi removida daqui
      )}

    </div>
  )
}

export default App