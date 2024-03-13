import productmodel from "../models/productmodel.js"
export const products=async(req,res) =>{
    try{
        const data=await productmodel.find()
        res.status(200).json(data)
    }catch(error){
        console.log(error);
    }
}

export const getsigle=async(req,res) => {
    try{
        const ID=req.params.id
        const single=await productmodel.findById(ID)
        res.status(200).json(single)
    }catch(error){
        console.log(error);
    }
}

