function ListaProdutos({ produtos }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Lista de Produtos</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-gray-600 font-bold">Código</th>
              <th className="px-6 py-4 text-gray-600 font-bold">Marca</th>
              <th className="px-6 py-4 text-gray-600 font-bold">Tipo</th>
              <th className="px-6 py-4 text-gray-600 font-bold">Categoria</th>
              <th className="px-6 py-4 text-gray-600 font-bold text-right">Preço</th>
            </tr>
          </thead>

          <tbody>
            {produtos && produtos.map((produto, index) => (
              <tr key={index} className="border-b hover:bg-gray-100 transition duration-150">
                <td className="px-6 py-4 font-medium text-gray-900">{produto.codigo}</td>
                <td className="px-6 py-4 text-gray-600">{produto.marca}</td>
                <td className="px-6 py-4 text-gray-600">{produto.tipo}</td>
                <td className="px-6 py-4 text-gray-600">{produto.categoria}</td>
                <td className="px-6 py-4 text-green-600 font-bold text-right">
                  R$ {parseFloat(produto.preco).toFixed(2)}
                </td>
              </tr>
            ))}
            
            {(!produtos || produtos.length === 0) && (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-400 italic">
                  Nenhum produto cadastrado ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListaProdutos