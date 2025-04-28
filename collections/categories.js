export async function categoriesCollection(db) {
  await db.createCollection("categories", {
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
