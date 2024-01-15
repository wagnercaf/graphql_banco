const UsuarioCadastroService = require("../../service/UsuarioCadastroService")

module.exports = {
  Query: {
    contatos: async () => UsuarioCadastroService.contatos(),
  },
  Mutation: {
    criarContato: async (_, { data }) =>
      await UsuarioCadastroService.criarContato(data),
    atualizarContato: async (_, { id, data }) =>
      await UsuarioCadastroService.atualizarContato(id, data),
    deletarContato: async (_, { filtro }) => 
      await UsuarioCadastroService.deletarContato(filtro),
  },
};