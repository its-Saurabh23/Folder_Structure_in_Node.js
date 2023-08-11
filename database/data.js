const Data = require('./DB.json')

const getAllUsers = ()=>{
    return Data;
}

module.exports = {
    getAllUsers
}