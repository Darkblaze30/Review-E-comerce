export class ProductsCollection {
  #collection = {
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
          _id: {
            bsonType: "objectId",
          },
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
          categoryId: {
            bsonType: "objectId"
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
        additionalProperties: false,
      },
    },
  };
  async #create(db) {
    await db.createCollection("products", this.#collection);
  }

  async #generateIndexes(db) {
    const products = db.collection("products");

    await products.createIndexes([
      {
        key: { code: 1 },
        name: "indexCode",
        unique: true,
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { name: 1 },
        name: "indexName",
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
