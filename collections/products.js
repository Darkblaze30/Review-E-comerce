export async function productsCollection(db) {
  await db.createCollection("products", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "code",
          "name",
          "description",
          "image",
          "price",
          "stock",
          "condition",
          "vat",
        ],
        properties: {
          code: {
            bsonType: "string",
          },
          name: {
            bsonType: "string",
          },
          description: {
            bsonType: "string",
          },
          image: {
            bsonType: "string",
          },
          price: {
            bsonType: "number",
          },
          stock: {
            bsonType: "number",
          },
          condition: {
            bsonType: "string",
          },
          active: {
            bsonType: "bool",
          },
          vat: {
            bsonType: "number",
          },
        },
      },
    },
  });
}
