const { MongoTailableCursorError } = require("mongodb")

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

db.properties.insertMany([
    {
        street: "102/340 Onehunga Mall", popertyType: "apartment", suburb: "Onehunga", city: "Auckland", postcode: 1061,
        images: ["https://trademe.tmcdn.co.nz/photoserver/1024sq/1833061939.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833061951.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833061958.jpg"],
        beds: 2, baths: 1, carparks: 1, price: 595, info: "You know you want it.", transport: true, grocery: true, parks: true, pets: false, gyms: false, cafes: true
    },
    {
        street: "105/10 Exmouth St.", propertyType: "apartment", suburb: "Eden Terrace", city: "Acukland", postcode: 1021,
        images: ["https://trademe.tmcdn.co.nz/photoserver/1024sq/1833008908.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833009616.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833009603.jpg"],
        beds: 2, baths: 2, carparks: 1, price: 1050, info: "Downright sexy", transport: true, grocery: true, parks: true, pets: false, gyms: true, cafes: true
    },
    {
        street: "3/137 Crummer Road", propertyType: "townhouse", suburb: "Grey Lynn", city: "Auckland", postcode: 1021,
        images: ["https://trademe.tmcdn.co.nz/photoserver/1024sq/1833009124.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833009138.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1833009146.jpg"],
        beds: 1, baths: 1, carparks: 1, price: 520, info: "Come on in!", transport: true, grocery:true, parks: true, pets: false, gyms: true, cafes: true
    },
    {
        street: "4B/1 Ophir Street", propertyType: "apartment", suburb: "City Centre", city: "Auckland", postcode: 1010,
        images: ["https://trademe.tmcdn.co.nz/photoserver/1024sq/1832635168.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1832635211.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1832635224.jpg"],
        beds: 2, baths: 1, carparks: 2, price: 750, info: "This is the one.", transport: true, grocery: true, parks: true, pets: false, gyms: true, cafes: true
    }
])

db.properties.insertMany([
    {
        street: "9/9 Union Street", propertyType: "apartment", suburb: "City Centre", city: "Auckland", postcode: 1010,
        images: ["https://trademe.tmcdn.co.nz/photoserver/1024sq/1832560140.jpg", "https://trademe.tmcdn.co.nz/photoserver/1024sq/1832560108.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832560196.jpg"],
        beds: 2, baths: 1, carparks: 0, price: 950, info: "Livin the dream.", transport: true, grocery: true, parks: true, pets: false, gyms: true, cafes: true
    },
    {
        street: "73 A Victoria Ave", propertyType: "house", suburb: "Remuera", city: "Auckland", postcode: "1050",
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1832518569.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832518624.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832518607.jpg"],
        beds: 4, baths: 3, carparks: 5, price: 1900, info: "This one's aight.", transport: true, grocery: true, parks: true, pets: true, gyms: false, cafes: true
    },
    {
        street: "3/3 Birdwood Crescent", propertyType: "apartment", suburb: "Parnell", city: "Auckland", postcode: 1050,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1831443800.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831454605.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831454567.jpg"],
        beds: 2, baths: 1, carparks: 1, price: 800, info: "No place like home.", transport: true, grocery: false, parks: false, pets: false, gyms: false, cafes: true
    }, 
    {
        street: "157 Fendalton Rd.", propertyType: "hose", suburb: "Fendalton", city: "Christchurch", postcode: 8052,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1832426879.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832428055.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832428171.jpg"],
        beds: 4, baths: 3, carparks: 4, price: 1200, info: "The highlife.", transport: true, grocery: true, parks: true, pets: true, cafes: true
    },
    {
        street: "19 Balmoral Lane", propertyType: "apartment", suburb: "Redcliffs", city: "Christchurch", postcode: 8081,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1807929354.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1807929319.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1807929320.jpg"],
        beds: 3, baths: 1, carparks: 2, price: 1450, info: "Living large in Christchurch", transport: false, grocery: false, parks: true, pets: true, gyms: false, cafes: false
    }
])

db.properties.insertMany([
    {
        street: "68A Alford Street", propertyType: "apartment", suburb: "Waterview", city: "Auckland", postcode: 1026,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1832482407.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832482373.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832482381.jpg"],
        beds: 3, baths: 2, carparks: 2, price: 1280, info: "You've finally arrived.", transport: true, grocery: false, parks: true, pets: false, cafes: false
    },
    {
        street: "1C Withiel Drive", propertyType: "apartment", suburb: "Epsom", city: "Auckland", postcode: 1023,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1833080931.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1833080966.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1833080941.jpg"],
        beds: 3, baths: 2, carparks: 1, price: 1140, info: "Check out this baller pad", transport: true, grocery: false, parks: true, pets: true, gyms: true, cafes: true
    },
    {
        street: "16/34 Pollen Street", propertyType: "apartment", suburb: "Grey Lynn", city: "Auckland", postcode: 1021,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1831963614.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831967950.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831967962.jpg"],
        beds: 2, baths: 1, carparks: 1, price: 980, info: "Posher than posh.", transport: true, grocery: true, parks: true, pets: true, gyms: true, cafes: true
    }  
])

db.properties.insertMany([
    {
        street: "70 Office Rd.", propertyType: "apartment", suburb: "Merivale", city: "Christchurch", postcode: 8014,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1832529413.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832529431.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1832529467.jpg"],
        beds: 3, baths: 3, carparks: 2, price: 950, info: "You know you wish you were cool enough to live here.", transport: true, grocery: true, parks: true, pets: false, gyms: true, cafes: true
    }, 
    {
        street: "23 Napier Street", propertyType: "apartment", suburb: "Karaka Bays", city: "Wellington", postcode: 6022,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1831419814.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831419827.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831419825.jpg"],
        beds: 3, baths: 2, carparks: 2, price: 900, info: "The view says it all.", transport: false, grocery: false, parks: true, pets: true, cafes: false
    },
    {
        street: "4F Regent St.", propertyType: "apartment", suburb: "Newton", city: "Wellington", postcode: 6021,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1827033790.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1827033806.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1827033815.jpg"],
        beds: 3, baths: 2, carparks: 1, price: 900, info: "Can somebody say high-end?", transport:true, grocery: true, parks: true, pets: true, gyms: true, cafes: true
    },
    {
        street: "117 Marine Parade", propertyType: "apartment", suburb: "Seatoun", city: "Wellington", postcode: 6022,
        images: ["https://trademe.tmcdn.co.nz/photoserver/plus/1831217896.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831217904.jpg", "https://trademe.tmcdn.co.nz/photoserver/plus/1831217915.jpg"],
        beds: 4, baths: 3, carparks: 2, price: 1500, info: "Welcome to the Wellington baller status.", transport: false, grocery: true, parks: true, pets: false, gyms: false, cafes: true
    }
])
