import { ObjectId } from "mongodb";
import PropertyModel from "../Models/propertyModel.js"


export const get3Properties = async (req, res) => {
    
    try {
        const properties = (await PropertyModel.find({ _id: { $gt: ObjectId('632ba1e574d74ed3bb1ebecb')}}).limit(3));
        res.status(200).json(properties)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const addProperty = async (req, res) => {
    const newProperty = new PropertyModel(req.body)
    
    try {        
        await newProperty.save()
        res.status(200).json(newProperty);
    } catch (error) {
        console.log(error)
    }
}