export class errorHandler extends Error {
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleWare=(err,req,res,next)=>{

    err.message=err.message||"Interval Server Error";
    err.statusCode=err.statusCode||500;
    return res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
};

