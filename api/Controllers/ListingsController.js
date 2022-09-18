import PropertyModel from "../Models/propertyModel.js"


export const getAllProperties = async (req, res) => {
    
    try {
        const properties = await PropertyModel.find();
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