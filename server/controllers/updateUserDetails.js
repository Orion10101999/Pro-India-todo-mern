const getUserDetailsFromtoken = require("../helpers/getUserDetailsFromToken");
const UserModel = require("../models/UserModel");

async function updateUserDetails(request , response){
    try {
        const token = request.cookies.token || ""

        const user = await getUserDetailsFromtoken(token)

        const {name , profile_pic} = request.body

        const updatedUser = await UserModel.updateOne({ _id : user._id},{
            name,profile_pic
        }) 

        const userInformation = await UserModel.findById(user._id)

        
        return response.status(200).json({
            message : "user updated sucessfully",
            data : userInformation,
            success : true
        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true
        });   
    }
}

module.exports = updateUserDetails