import mongoose from "mongoose";

const propertySchema = mongoose.Schema(
    {
        street: { type: String, required: true },
        suburb: String,
        city: String,
        postcode: Number,
        headimg: String,
        beds: Number,
        baths: Number,
        carparks: Number,
        price: Number,
        info: String
    },
    { timestamps: true }
)

const PropertyModel = mongoose.model("properties", propertySchema)

export default PropertyModel