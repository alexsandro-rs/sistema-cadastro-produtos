import { useState } from "react"

// Recebemos a "ferramenta" onLoginSucesso vinda do App
function Login({ onLoginSucesso }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mensagem, setMensagem] = useState("")

  const fazerLogin = async (e) => {
    e.preventDefault()
    try {
      const resposta = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      })
      const dados = await resposta.json()
      
      if (dados.sucesso) {
        // Agora passamos o "dados.nome" que veio do Python
        onLoginSucesso(dados.nome) 
      } else {
        setMensagem(dados.mensagem)
      }

    } catch (erro) {
      setMensagem("Erro ao conectar com o servidor.")
    }
  }

  return (
    // 1. Criamos um container para agrupar Logo + Caixa Branca e centralizar
    <div className="flex flex-col items-center">
      
      {/* 2. A Imagem da Logo */}
      {/* w-32 = largura de 128px / mb-8 = margem abaixo */}
      <img src="/logo.png" alt="Logo da Empresa" className="w-52 mb-8" />

      {/* 3. A caixa branca original (sem alterações nela) */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Acesse sua Conta</h2>
        
        {mensagem && <p className="mb-4 text-center text-sm font-bold text-red-500">{mensagem}</p>}

        <form className="flex flex-col gap-4" onSubmit={fazerLogin}>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
            <input 
              type="password" 
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="******"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
            />
          </div>

          <button 
            type="submit"
            className="bg-[#1e3a8a] text-white font-bold py-2 px-4 rounded hover:bg-[#172554] transition duration-300 cursor-pointer"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login