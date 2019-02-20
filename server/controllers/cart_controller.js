const swag = require('../models/swag')

module.exports = {
    add: (req, res, next) => {
        const {id} = req.query;
        const product = cart.findIndex(swag => swag.id === id);
        if(swag.id !== id){
            
        }
    },
    remove: (req, res, next) => {
        
    },    
    checkout: (req, res, next) => {

    },
}