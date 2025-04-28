
db.createCollection('user', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['firstName','lastname','identificationNumber','email','phone','password', 'active'],
            additionalProperties: false,
            properties: {
                firstName:{
                    bsonType: 'string'
                },
                lastname: {
                    bsonType: 'string'
                },
                identificationNumber: {
                    bsonType: 'string'
                },
                indentificationType: {
                    bsonType: 'string',
                    enum: ['cc', 'it','ps','nit']
                },
                email: {
                    bsonType: 'string'
                },
                phone: {
                    bsonType: 'string',
                    pattern: "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$"
                },
                password: {
                    bsonType: 'string',
                    pattern: "^[A-Z]",
                    minLenght: 5,
                    maxLength: 15
                },
                place: {
                    bsonType: 'object'
                },
                userType: {
                    bsonType: 'array',
                    uniqueItems: true,
                    enum: ['A', 'C', 'S']
                },
                active: {
                    bsonType: 'bool'
                },
                registeredDate: {
                    bsonType: 'date' 
                }
            }
        }
    }
})


db.createCollection('products', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['code','name','description','image','price','stock', 'condition', 'vat'],
            properties: {
                code: {
                    bsonType: 'string'
                },
                name: {
                    bsonType: 'string'
                },
                description: {
                    bsonType: 'string'
                },
                image:{
                    bsonType: 'string'
                },
                price:{
                    bsonType: 'number'
                },
                stock:{
                    bsonType: 'number'
                },
                condition:{
                    bsonType: 'string',
                },
                active:{
                    bsonType: 'bool'
                },
                vat:{
                    bsonType: 'number'
                }
            }
        }
    }
})

db.createCollection('categories', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['code','name'],
            properties: {
                code: {
                    bsonType: 'string'
                },
                name: {
                    bsonType: 'string'
                },
                active: {
                    bsonType: 'bool'
                },
            }
        }
    }
})

db.createCollection('paymentMetods', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['code','name'],
            properties: {
                code: {
                    bsonType: 'string'
                },
                name: {
                    bsonType: 'string'
                },
                active: {
                    bsonType: 'bool'
                },
            }
        }
    }
})

db.createCollection('sales', {
    validator: {
        $jsonSchema:{
            bsonType: 'object',
            required: ['reference','date', 'paymentMetod', 'client', 'seller', 'details'],
            properties: {
                reference: {
                    bsonType: 'string'
                },
                date: {
                    bsonType: 'date'
                },
                paymentMetod: {
                    bsonType: 'objectId'
                },
                client: {
                    bsonType: 'objectId'
                },
                seller: {
                    bsonType: 'objectId'
                },
                details: {
                    bsonType: 'object'
                },
            }
        }
    }
})

