import mongoose from "mongoose";

const userinfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    photoURL: String,
});

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['USER_ROLE','ADMIN_ROLE'],
        default: 'USER_ROLE'
    },
    create_at : {
        type : Date,
        default : Date.now
    },
    status : {
        type : Boolean,
        default : true
    },
    userInfo: userinfoSchema
});



userSchema.methods.toJSON = function() {
    const {password,__v ,...usuario} = this.toObject();
    return usuario;
}

const User = mongoose.model('User', userSchema);

export default User;
