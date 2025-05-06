// export async function categoriesCollection(db) {
//   await db.createCollection("categories", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         required: ["code", "name"],
//         properties: {
//           _id: {
//             bsonType: "objectId",
//           },
//           code: {
//             bsonType: "string",
//           },
//           name: {
//             bsonType: "string",
//           },
//           active: {
//             bsonType: "bool",
//           },
//         },
//         additionalProperties: false,
//       },
//     },
//   });
// }

export class categoriesCollection {
  #collection = {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["code", "name"],
        properties: {
          _id: {
            bsonType: "objectId",
          },
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
        additionalProperties: false,
      },
    },
  };

  async #create(db) {
    await db.createCollection("categories", this.#collection);
  }

  async #generateIndexes(db) {
    const categories = db.collection("categories");

    await categories.createIndexes([
      {
        key: { code: 1 },
        name: "indexcode",
        unique: true,
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { name: 1 },
        name: "indexname",
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
    ]);
  }

  async generateCollection(db) {
    await this.#create(db);
    await this.#generateIndexes(db);
  }
}
