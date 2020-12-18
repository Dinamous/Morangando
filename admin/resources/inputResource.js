const { Product } = require("../../models");
module.exports = {
    

  actions: {
    new: {
      before: async (request) => {
        if(request.method === 'post'){
            const { id_product:id,quantity, ...otherParams } = request.payload;

            const productRecord = await Product.findOne({
            where: { id },
            });

            console.log(productRecord)
            productRecord.inStorage += quantity
            console.log(productRecord.quantity)
            await productRecord.save();
        }
      },
    },
  },
};
