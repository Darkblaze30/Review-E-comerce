import {main,client} from '../helpers/db.js'

const db = await main()

const products = db.collection("products")

export async function insertProducts() {
    try {
        await products.insertOne({
            code: "PRD001",
            name: "Producto de ejemplo",
            description: "Este es un producto de prueba para validar el esquema.",
            image: "https://example.com/images/producto-ejemplo.jpg",
            price: 99.99,
            stock: 50,
            condition: "nuevo",
            active: true,
            vat: 19
          });
          
        console.log('producto creado')
    } catch (error) {
        console.log(error.message)
    }
}

await insertProducts()

await client.close()


export async function updateProducts() {
    
}
