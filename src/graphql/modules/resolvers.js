
module.exports = {
  Query: {
    contatos: async (obj, args, context, info) =>  await context.UsuarioCadastroService.contatos(),   

    contato: async (obj, { filtro }, {UsuarioCadastroService}) =>  await UsuarioCadastroService.contato(filtro),  
  },
  Mutation: {
    criarContato: async (_, { data }, {UsuarioCadastroService}) =>
      await UsuarioCadastroService.criarContato(data),

    atualizarContato: async (_, { id, data }, {UsuarioCadastroService}) =>
      await UsuarioCadastroService.atualizarContato(id, data),

    deletarContato: async (_, { filtro }, {UsuarioCadastroService}) => 
      await UsuarioCadastroService.deletarContato(filtro),
  },
};