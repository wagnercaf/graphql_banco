const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const UsuarioCadastroService = require("./src/service/UsuarioCadastroService");

const server = new ApolloServer({
  ...graphql,
  context: () =>({
    UsuarioCadastroService: UsuarioCadastroService
  }) 
});

server.listen().then(({ url }) => console.log(url));