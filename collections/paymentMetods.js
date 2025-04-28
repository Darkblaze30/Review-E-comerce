export async function paymentMetodsCollection(db) {
  await db.createCollection("paymentMetods", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "name"],
        properties: {
          code: {
            bsonType: "string",
          },
          name: {
            bsonType: "string",
          },
          active: {
            bsonType: "bool",
          },
        },
      },
    },
  });
}
