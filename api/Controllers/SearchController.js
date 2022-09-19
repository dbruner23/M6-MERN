import mongoose from 'mongoose';
import PropertyModel from '../Models/propertyModel.js';

export const search = async (req, res) => {
    const { propertyType, priceMin, priceMax, beds, baths, transport, grocery, parks, pets, gyms, cafes } = req.body;

    try {
        const propertiesMatch = await PropertyModel.find({
            propertyType: propertyType, 
            price: { $gte: priceMin, $lte: priceMax },
            beds: { $gte: beds },
            baths: { $gte: baths },
            transport: transport,
            grocery: grocery,
            parks: parks,
            pets: pets,
            gyms: gyms,
            cafes: cafes
        })

        res.status(200).json(propertiesMatch)
    } catch (error) {
        res.status(500).json(error)
    }
}