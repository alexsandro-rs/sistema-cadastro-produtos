import { useState } from "react"
import Swal from 'sweetalert2'

function CadastroProduto({ onProdutoCadastrado, nomeUsuario, onLogout }) {
  // 1. Estados para cada campo do formulário
  const [codigo, setCodigo] = useState("")
  const [marca, setMarca] = useState("")
  const [tipo, setTipo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [preco, setPreco] = useState("")
  const [custo, setCusto] = useState("")
  const [obs, setObs] = useState("")

  // 2. Função de Envio
  const salvarProduto = async (e) => {
    e.preventDefault() // Não deixa a página recarregar do jeito antigo

    const produto = { codigo, marca, tipo, categoria, preco, custo, obs }

    try {
      const resposta = await fetch("http://127.0.0.1:5000/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      })

      if (resposta.ok) {
        // MENSAGEM PERSONALIZADA AQUI
        Swal.fire({
          title: 'Sucesso!',
          text: 'Produto cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#1e3a8a' // A cor azul da sua marca
        })
        
        // ... (O resto do código de limpar campos continua igual abaixo)
        setCodigo("")
        setMarca("")
        // etc...
        
        // 3. Reiniciar o formulário (Limpar os campos)
        setCodigo("")
        setMarca("")
        setTipo("")
        setCategoria("")
        setPreco("")
        setCusto("")
        setObs("")
      } else {
        alert("Erro ao cadastrar produto.")
      }
    } catch (erro) {
      console.error(erro)
      alert("Erro de conexão com o servidor.")
    }
  }

  return (
    // (O código acima do return continua igual...)

    <div className="flex flex-col items-center w-full max-w-2xl">
      <img src="/logo.png" alt="Logo da Empresa" className="w-52 mb-8" />
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        
        {/* --- NOVO CABEÇALHO --- */}
        <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
            <div className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase font-bold">Usuário Logado</span>
                <span className="text-gray-800 font-bold text-lg">{nomeUsuario}</span>
            </div>
            
            <button 
                onClick={onLogout}
                className="text-red-500 text-sm font-bold hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded transition duration-200"
            >
                Sair
            </button>
        </div>
        {/* ---------------------- */}

        <h2 className="text-2xl font-bold mb-6 text-gray-800">Cadastro de Produto</h2>
        
        <form onSubmit={salvarProduto} className="flex flex-col gap-4">
            {/* ... (O restante do formulário continua idêntico, não precisa mexer) ... */}
            
            {/* DICA: Se você for copiar tudo, lembre-se de manter os inputs que já fizemos antes aqui dentro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Código do Produto</label>
                    <input type="text" value={codigo} onChange={(e) => setCodigo(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Ex: PROD-001" required />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Marca</label>
                    <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Ex: Nike, Samsung" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Tipo</label>
                    <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Ex: Tênis, Smartphone" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Categoria</label>
                    <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="Ex: Esportivo, Eletrônicos" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Preço Unitário</label>
                    <input type="number" step="0.01" value={preco} onChange={(e) => setPreco(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="0.00" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Custo</label>
                    <input type="number" step="0.01" value={custo} onChange={(e) => setCusto(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" placeholder="0.00" />
                </div>
            </div>

            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Observações</label>
                <textarea value={obs} onChange={(e) => setObs(e.target.value)} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" rows="3"></textarea>
            </div>

            <button type="submit" className="bg-[#1e3a8a] text-white font-bold py-3 px-4 rounded hover:bg-[#112255] transition duration-300 mt-2 cursor-pointer">
                Cadastrar Produto
            </button>
        </form>
      </div>
    </div>
  )
}

export default CadastroProduto