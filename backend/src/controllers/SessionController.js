const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body; // O nome desse tipo de "extração" é desestruturação
        const user = await User.create({ email });
        
        return res.json({ message: 'teste' });
    }
};