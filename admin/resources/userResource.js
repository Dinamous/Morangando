const bcrypt = require('bcrypt');

module.exports = {
    properties: {
      encryptedPassword: {
        isVisible: false,
      },
      password: {
      required:true,
       type: 'password',      
       isVisible: {
          show: false,
          edit: true,
          list: false,
          filter: false
        }
      }

    },
    actions:{
      new:{
        before: async (request) => {
          if (request.method === 'post'){
            const {password, ...otherParams} = request.payload
            console.log(password)
            if(password){
              const encryptedPassword = await bcrypt.hashSync(password, 10)

              return{
                ...request,
                payload:{
                  ...otherParams,
                  password,
                  encryptedPassword
                }
              }
            }
          }
        }
      }
    }

  };