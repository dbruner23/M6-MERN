import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
    {
        street: { type: String, required: true },
        propertyType: String,
        suburb: String,
        city: String,
        postcode: Number,
        images: [String],
        beds: Number,
        baths: Number,
        carparks: Number,
        price: Number,
        info: String,
        transport: Boolean,
        grocery: Boolean,
        parks: Boolean,
        pets: Boolean,
        gyms: Boolean,
        cafes: Boolean
    },
    { timestamps: true }
)

const PropertyModel = mongoose.model("properties", propertySchema)

export default PropertyModel