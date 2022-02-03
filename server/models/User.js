const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    username: {
        type: String,
    }, 
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    imageUrl:{
        type: String
    }
});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;
