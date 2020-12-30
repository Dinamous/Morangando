module.exports = {
    properties: {
        id: {
          isVisible:{
            show: false,
            edit: false,
            list: false,
            filter: false,
        } 
          
        },
        createdAt:{
            isVisible: false,
        },
        updatedAt:{
            isVisible: false,
        },
        inStorage:{
            isVisible:{
                show: true,
                edit: true,
                list: true,
                filter: false
            }
        }


        
}
}