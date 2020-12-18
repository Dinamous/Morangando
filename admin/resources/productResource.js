module.exports = {
    properties: {
        id: {
          isVisible: false,
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