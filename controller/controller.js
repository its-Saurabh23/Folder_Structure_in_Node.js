const user = require('../database/data') 

const users = (req,res)=>
{ 
    try {
        const getUser = user.getAllUsers();
        res.status(200).send({status:"OK",data:getUser});
    } catch (error) {
    res.status(500).send('Internal Server Error');   
    }
}

module.exports = {
    users,
}
 