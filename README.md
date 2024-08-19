# Receitas-Match API

## Descrição

A **Receitas-Match** é uma API que facilita a busca por receitas com base nos ingredientes disponíveis. Ela permite encontrar receitas detalhadas, incluindo lista de ingredientes e modo de preparo, além de possibilitar a busca por receitas que utilizem ingredientes específicos.

## Funcionalidades

- **Gerenciamento de Receitas:** CRUD completo para criar, ler, atualizar e deletar receitas.
- **Gerenciamento de Categorias:** CRUD completo para criar, ler, atualizar e deletar categorias de receitas.
- **Gerenciamento de Ingredientes:** CRUD completo para criar, ler, atualizar e deletar ingredientes.
- **Busca por Ingredientes:** Encontre receitas que utilizem os ingredientes disponíveis em casa, passando os ingredientes como parâmetros.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado.
- **Mongoose**: Biblioteca para modelagem de dados no MongoDB.

## Instalação

1. Clone o repositório e acesse o diretório:

    ```bash
    git clone https://github.com/rodrigueskaua/Receitas-Match-API.git
    cd Receitas-Match-API
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o arquivo `.env`:
   
- **Porta:** A API utiliza a porta configurada no arquivo `.env` através da variável `PORT`. A porta padrão é `3000`, mas pode ser trocada para outra que melhor se adeque ao seu ambiente de desenvolvimento.
- **MongoDB:** Configure a URL de conexão do MongoDB no arquivo `.env` usando a variável `MONGODB_URI`. Essa URL será utilizada para armazenar os dados da API. A comunicação com o banco de dados será feita através da biblioteca Mongoose.

    ```plaintext
    PORT=3000
    MONGODB_URI=<sua-url-do-mongodb>
    ```

4. Inicie o servidor:

    ```bash
    npm run dev
    ```

## Rotas da API

### Receitas
- `GET /recipes` - Retorna todas as receitas.
- `POST /recipes/create` - Cria uma nova receita.
- `PUT /recipes/update/:id` - Atualiza uma receita existente pelo ID.
- `DELETE /recipes/destroy/:id` - Deleta uma receita existente pelo ID.

### Categorias
- `GET /categories` - Retorna todas as categorias.
- `POST /categories/create` - Cria uma nova categoria.
- `PUT /categories/update/:id` - Atualiza uma categoria existente pelo ID.
- `DELETE /categories/destroy/:id` - Deleta uma categoria existente pelo ID.

## Repositório

[GitHub: Receitas-Match-API](https://github.com/rodrigueskaua/Receitas-Match-API)
