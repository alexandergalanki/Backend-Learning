const validator=require('validator');

const validateRequest=(req)=>{

    const{firstName,lastName,emailId,password}=req;

    if(!firstName || !lastName){
        throw new Error("Enter Valid Name");
    }else if(!validator.isEmail(emailId)){
        throw new Error("Not a valid email address")
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter strong password")
    }
}

module.exports={validateRequest};