module.exports = {
    language: 'pl',
    translations:{
        actions: {
            new: 'Adicionar Registro',
            edit: 'Editar',
            show: 'Detalhes',
            delete: 'Deletar',
            bulkDelete: 'Deletar Todos',
            list: 'Listar',
          },
          buttons: {
            save: 'Salvar Registro',
            filter: 'Filtro',
            applyChanges: 'Aplicar Mudanças',
            resetFilter: 'Resetar Mudanças',
            confirmRemovalMany: 'Deseja realmente apagar permanentemente {{count}} registros?',
            confirmRemovalMany_plural: 'Deseja realmente apagar permanentemente {{count}} registros?',
            logout: 'Sair',
            seeTheDocumentation: 'Veja: <1>na documentação</1>',
            createFirstRecord: 'Adicionar o primeiro registro',
          },
          labels: {
            navigation: 'Navegação',
            pages: 'Páginas',
            selectedRecords: '({{selected}}) Selecionados',
            filters: 'Filtros',
            adminVersion: 'Admin: {{version}}',
            appVersion: 'App: {{version}}',
            //Alterar nome das tabelas
            Products: 'Produtos',
            Providers: 'Fornecedores',
            Clients: 'Clientes',
            Inputs: 'Entrada de Produtos',
            Clients: 'Clientes'
          },
          properties: {
        
          },
          resources: {
            Products:{
                properties: {
                    name: 'Nome do Produto',
                    inStorage: 'Quantidade em estoque'
                }
            },
            Inputs:{
                //'id_product', 'quantity', 'value','id_provider'
                properties:{
                    id_product: "Nome do produto",
                    quantity: "Quantidade (Caixas)",
                    value: "Preço (Caixa)",
                    id_provider: "Fornecedor",
                    createdAt: 'Data da Remessa',
                    updatedAt: "Atualizado em"
                }
            },
            Providers:{
                //listProperties: ['name', 'phone', 'city','neighborhood','email']
                properties:{
                    name:'Nome',
                    phone:'Telefone',
                    city: 'Cidade',
                    neighborhood:'Bairro',
                    email: 'Email',
                    
                }
            },
            Clients:{
                properties:{
                    name:'Nome',

                }
            }
          },

          messages: {
            successfullyBulkDeleted: ' {{count}} registros foram apagados com sucesso.',
            successfullyBulkDeleted_plural: ' {{count}} registros foram apagados com sucesso.',
            successfullyDeleted: 'Registro apagado com sucesso.',
            successfullyUpdated: 'Registro atualizado com sucesso.',
            thereWereValidationErrors: 'Existem erros de validação - por favor os confira para continuar.',
            successfullyCreated: 'Registro criado com sucesso.',
            bulkDeleteError: 'Ocorreu um erro ao deletar os registros, Confira o console para mais informações.',
            errorFetchingRecords: 'Ocorreu um erro ao inserir os registros, Confira o console para mais informações.',
            errorFetchingRecord: 'Ocorreu um erro ao inserir um registro, Confira o console para mais informações.',
            noRecordsSelected: 'Nenhum registro foi selecionado.',
            theseRecordsWillBeRemoved: 'Os seguintes registros serão apagados.',
            theseRecordsWillBeRemoved_plural: 'O seguinte registro será apagado.',
            pickSomeFirstToRemove: 'Para apagar algum registro, deve-se selecionar pelo menos um listado.',
            error404Resource: 'O registro de id: {{resourceId}} não pôde ser encontrado.',
            error404Action: 'O registro de id: {{resourceId}} não possui nenhum ação com o nome: {{actionName}}.',
            error404Record: 'O registro de id: {{resourceId}} não possui nenhum atributo com o id: {{recordId}}.',
            seeConsoleForMore: 'Confira o console de desenvolvimento para mais detalhes...',
            noActionComponent: 'Você tem que implementar uma ação para a sua Ação.',
            noRecordsInResource: 'Não existem registros nessa coleção.',
            confirmDelete: 'Você realmente deseja deletar este registro?',
          },
    }
    
}