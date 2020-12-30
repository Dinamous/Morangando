const { Product } = require("../../models");
const { ValidationError } = require('admin-bro')


module.exports = {
  listProperties: ["id_product", "quantity", "value", "id_client", "createdAt"],
  properties: {
    updatedAt: {
      isVisible: false,
    },
    id: {
      isVisible: false,
    },
  },
  actions: {
    new: {
      before: async (request) => {
        const { payload,method } = request;
        //verificando se a quantidade solicitada é menor ou igual
        //a quantidade existente no estoque
        if (method === "post") {
          

          //id do produto
          const id = payload.id_product;
          const quantityAdd = payload.quantity;

          const productRecord = await Product.findOne({
            where: { id },
          });

          if (quantityAdd > parseInt(productRecord.inStorage)) {
            throw new ValidationError(
              {
                quantity: {
                  message:
                    "Seu estoque apenas possui "+productRecord.inStorage+" caixas deste produto." ,
                },
              },
              {
                message: " Algo deu errado...",
              }
            );
          }

          if(quantityAdd<= 0){
            throw new ValidationError(
              {
                quantity: {
                  message:
                    "Você solicitou a saída de um valor inaceitável de caixas" ,
                },
              },
              {
                message: " Algo deu errado...",
              }
            );
          }

          return request;
        }
      },

    // before: async (request) => {
    //     const {method, payload} = request
    //     if (method === 'post' && payload.id_product === '3') {
    //         console.log("===================== achou id =======================")
    //       throw new ValidationError({
    //         name: {
    //           message: 'cannot be "forbidden"',
    //         },
    //       }, {
    //         message: 'something wrong happened',
    //       })
    //     }
    //     return request
    //   },
      after: async (originalResponse, request, context) => {
        //verificando se não possui erros ou não é delete
        if (
          (request.method === "post" &&
            originalResponse.record &&
            !Object.keys(originalResponse.record.errors).length) ||
          context.action.name === "delete"
        ) {
          //id do produto a ser atualizado
          const id = request.payload.id_product;
          //recupera a quantidade fornecida na payload
          const quantityAdd = request.payload.quantity;

          //busca o produto pelo id
          const productRecord = await Product.findOne({
            where: { id },
          });

          const sum = parseInt(productRecord.inStorage) - parseInt(quantityAdd);

          if(sum<0){
            originalResponse.record.errors.quantity = "Seu estoque apenas possui "+productRecord.inStorage+" caixas deste produto."


          }else{
            //adicionando a quantidade da remessa na tabela produto
            console.log("in storage = " + productRecord.inStorage);
            productRecord.inStorage = sum;
            console.log("in storage = " + sum);
            productRecord.save();
          }

          

          return originalResponse;
        }
      },
    },
  },
};
