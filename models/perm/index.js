const item_model = require('./item_model') ;


module.exports = (sequelize) => {
    return {
        item_model_perm: item_model(sequelize)
        // item_kit_model: item_kit_model(sequelize)
        // .......
    }
}