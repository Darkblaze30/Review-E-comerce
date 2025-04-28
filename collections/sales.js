export async function salesCollection(db) {
  await db.createCollection("sales", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "reference",
          "date",
          "paymentMetod",
          "client",
          "seller",
          "details",
        ],
        properties: {
          reference: {
            bsonType: "string",
          },
          date: {
            bsonType: "date",
          },
          paymentMetod: {
            bsonType: "objectId",
          },
          client: {
            bsonType: "objectId",
          },
          seller: {
            bsonType: "objectId",
          },
          details: {
            bsonType: "object",
          },
        },
      },
    },
  });
}