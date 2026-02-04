from flask import Flask, jsonify, request 
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Permite que o React converse com o Python

# Rota de teste (para ver se está vivo)
@app.route('/', methods=['GET'])
def home():
    return jsonify({"mensagem": "Back-end Python está rodando!"})

# Rota de Login (NOVA)
# O método POST serve para quando enviamos dados escondidos (como senhas)
@app.route('/login', methods=['POST'])
def login():
    dados = request.json
    email = dados.get('email')
    senha = dados.get('senha')

    # Verificação com seu novo usuário
    if email == "alexsandro@suamarca.com" and senha == "123":
        return jsonify({
            "mensagem": "Login aprovado!",
            "sucesso": True,
            "nome": "Alexandro Rafael" # <--- O Python agora entrega o nome!
        }), 200
    
    return jsonify({"mensagem": "Dados incorretos", "sucesso": False}), 401

# Rota para cadastrar produtos
@app.route('/produtos', methods=['POST'])
def cadastrar_produto():
    dados = request.json
    
    # Por enquanto, vamos apenas imprimir no terminal do Python para confirmar que chegou
    # (Futuramente, é aqui que salvaríamos no banco de dados)
    print(f"Produto recebido: {dados}")
    
    return jsonify({"mensagem": "Produto cadastrado com sucesso!", "sucesso": True}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)