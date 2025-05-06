export class SalesCollection {
  #collection = {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "reference",
          "date",
          "paymentMethod",
          "client",
          "seller",
          "details",
        ],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          reference: {
            bsonType: "number",
          },
          date: {
            bsonType: "date",
          },
          paymentMethod : {
            bsonType: "objectId",
          },
          client: {
            bsonType: "objectId",
          },
          seller: {
            bsonType: "objectId",
          },
          details: {
            bsonType: "array",
            items: {
              bsonType: "object",
              required: ["productId", "quantity", "price"],
              properties: {
                productId: { bsonType: "objectId" },
                quantity: { bsonType: "number", minimum: 1 },
                price: { bsonType: "number", minimum: 0 }
              }
            }
          }
        },
        additionalProperties: false,
      },
    },
  };

  async #create(db) {
    await db.createCollection("sales", this.#collection);
  }

  async #generateIndexes(db) {
    const sales = db.collection("sales");

    await sales.createIndexes([
      {
        key: { reference: 1 },
        name: "indexReference",
        unique: true,
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { date: 1 },
        name: "indexDate",
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { client: 1 },
        name: "indexClient",
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { seller: 1 },
        name: "indexSeller",
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
