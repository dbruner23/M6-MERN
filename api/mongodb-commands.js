db.properties.updateOne(
    { _id: '63285a1974d74ed3bb1ebec9' },
    {
        $set:
            { images: ["https://images.homes.co.nz/resize/fill/900/490/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/5163409767164485905", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/16851443088754888333", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/15257778982220684077"] }
    }
)

db.properties.insertOne(
    {
        street: "6A Swithland Place", propertyType: "house", suburb: "Avonhead", city: "Christchurch", postcode: 8042,
        images: ["https://images.homes.co.nz/resize/fill/900/490/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/5163409767164485905", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/15257778982220684077", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/16851443088754888333"], 
        beds: 4, baths: 2, carparks: 2, price: 850, info: "Massively cool.", transport: true, grocery: true, parks: true, pets: false, gyms: false, cafes: true
    })

db.properties.insertOne(
    {
        street: "7A Alberta St.", propertyType: "house", suburb: "Point Chevalier", city: "Auckland", postcode: 1022,
        images: ["https://images.homes.co.nz/resize/fill/900/490/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/12123699007450872300", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/5066683212195004397", "https://images.homes.co.nz/resize/fill/700/500/ce/0/plain/https://s3-ap-southeast-2.amazonaws.com/homes-listing-images/16993067051422968669"],
        beds: 3, baths: 1, carparks: 2, price: 950, info: "Super cool!", transport: true, grocery: true, parks: true, pets: false, gyms: false, cafes: true
    })