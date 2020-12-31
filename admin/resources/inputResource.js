const { Product } = require("../../models");
module.exports = {
  listProperties: ['id_product', 'quantity','id_provider','createdAt'],
    properties:{
        
        updatedAt:{
            isVisible:false
        },
        id:{
            isVisible:false
        }
    },

  actions: {
    new: {
      after: async (originalResponse,request,context) => {
          //verificando se não possui erros ou não é delete
        if((request.method === 'post'
        && originalResponse.record
        && !Object.keys(originalResponse.record.errors).length)
        || context.action.name === 'delete'){
            
          //id do produto a ser atualizado
          const id = request.payload.id_product
          //recupera a quantidade fornecida na payload
          const quantityAdd = request.payload.quantity

          //busca o produto pelo id
          const productRecord = await Product.findOne({
            where: { id },
          });
          
          const sum = parseInt(quantityAdd) + parseInt(productRecord.inStorage)

          //adicionando a quantidade da remessa na tabela produto
          console.log("in storage = "+productRecord.inStorage)
          productRecord.inStorage = sum
          console.log("in storage = "+sum)
          productRecord.save()

          return originalResponse
        }
      },
    },
  },

};
