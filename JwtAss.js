const jwt=require("jsonwebtoken");
const jwtPassword="123123";
const zod=require('zod');

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signJwt(username,password){
    const usernameres=emailSchema.safeParse(username);
    const passwordres=passwordSchema.safeParse(password);
    if(!usernameres.success || !passwordres.success){
        return null;
    }
    const signature=jwt.sign({
        username
    },jwtPassword);
    return signature;
}

function jwtDecode(token){
    const jwtToken=jwt.decode(token);
    if(jwtToken){
        return true;
    }
    else{
        return false;
    }
}
function jwtVerify(token){
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch(e){

    }
    return false;
    
}