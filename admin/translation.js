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
            Outputs: 'Saída de Produtos',
            Clients: 'Clientes',
            loginWelcome: 'Bem-vindo!',
            loginPassword: 'Senha'
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
                    id_provider: "Fornecedor",
                    createdAt: 'Data da Remessa',
                    updatedAt: "Atualizado em"
                }
            },
            Outputs:{
                //'id_product', 'quantity', 'value','id_provider'
                properties:{
                    id_product: "Nome do produto",
                    quantity: "Quantidade (Caixas)",
                    value: "Preço (Caixa)",
                    id_client: "Cliente",
                    createdAt: 'Data da Remessa',
                    updatedAt: "Atualizado em",
                    cut: "Quantidade para Corte"
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

            // ======================
        
            forbiddenError: 'You cannot perform action {{actionName}} on {{resourceId}}',
            anyForbiddenError: 'You cannot perform given action',
           
            noRecords: 'No records',
           
            welcomeOnBoard_title: 'Seja bem-vindo!',
            welcomeOnBoard_subtitle: 'Agora você é um de nós! Preparamos algumas dicas para começar:',
            loginWelcome: 'Morangando - A melhor forma de organizar e facilitar o seu trabalho administrativo agrícola.',
            addingResources_title: 'Adding Resources',
            addingResources_subtitle: 'How to add new resources to the sidebar',
            customizeResources_title: 'Customize Resources',
            customizeResources_subtitle: 'Defining behavior, adding properties and more...',
            customizeActions_title: 'Customize Actions',
            customizeActions_subtitle: 'Modifying existing actions and adding new',
            writeOwnComponents_title: 'Write Components',
            writeOwnComponents_subtitle: 'How to modify the Look and Feel of AdminBro',
            customDashboard_title: 'Custom Dashboard',
            customDashboard_subtitle: 'How to modify this view and add new Pages on the sidebar',
            roleBasedAccess_title: 'Role-Based Access Control',
            roleBasedAccess_subtitle: 'Create user roles and permissions in AdminBro',
            community_title: 'Join the slack community',
            community_subtitle: 'Talk with the creators of AdminBro and other AdminBro users',
            foundBug_title: 'Found a Bug? need improvement?',
            foundBug_subtitle: 'Raise an issue on our GitHub repo',
            needMoreSolutions_title: 'Need more advanced solutions?',
            needMoreSolutions_subtitle: 'We are here to provide you a beautiful UX/UI design and tailor made software based (not only) on AdminBro',
            invalidCredentials: 'Senha ou Email incorreto, verifique-os por favor.',
          },
    }
    
}