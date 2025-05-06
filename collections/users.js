// export async function usersCollection(db) {
//   await db.createCollection("users", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         required: [
//           "firstName",
//           "lastname",
//           "identificationNumber",
//           "email",
//           "phone",
//           "password",
//           "active",
//         ],
//         properties: {
//           _id: {
//             bsonType: "objectId",
//           },
//           firstName: {
//             bsonType: "string",
//           },
//           lastname: {
//             bsonType: "string",
//           },
//           identificationNumber: {
//             bsonType: "string",
//           },
//           indentificationType: {
//             bsonType: "string",
//             enum: ["cc", "it", "ps", "nit"],
//           },
//           email: {
//             bsonType: "string",
//           },
//           phone: {
//             bsonType: "string",
//             pattern:
//               "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$",
//           },
//           password: {
//             bsonType: "string",
//             pattern: "^[A-Z]",
//             minLength: 5,
//             maxLength: 15,
//           },
//           place: {
//             bsonType: "object",
//           },
//           userType: {
//             bsonType: "array",
//             uniqueItems: true,
//             enum: ["A", "C", "S"],
//           },
//           active: {
//             bsonType: "bool",
//           },
//           registeredDate: {
//             bsonType: "date",
//           },
//         },
//         additionalProperties: false,
//       },
//     },
//   });
// }

export class usersCollection {
  #collection = {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "firstName",
          "lastname",
          "identificationNumber",
          "email",
          "phone",
          "password",
          "active",
        ],
        properties: {
          _id: {
            bsonType: "objectId",
          },
          firstName: {
            bsonType: "string",
          },
          lastname: {
            bsonType: "string",
          },
          identificationNumber: {
            bsonType: "string",
          },
          identificationType: {
            bsonType: "string",
            enum: ["cc", "it", "ps", "nit"],
          },
          email: {
            bsonType: "string",
          },
          phone: {
            bsonType: "string",
          },
          password: {
            bsonType: "string",
            pattern: "^[A-Z]",
            minLength: 5,
            maxLength: 15,
          },
          place: {
            bsonType: "object",
          },
          userType: {
            bsonType: "string",
            enum: ["A", "C", "S"], // A = admin, C = client, S = seller
          },
          active: {
            bsonType: "bool",
          },
          registeredDate: {
            bsonType: "date",
          },
        },
        additionalProperties: false,
      },
    },
  };

  async #create(db) {
    await db.createCollection("users", this.#collection);
  }

  async #generateIndexes(db) {
    const users = db.collection("users");

    await users.createIndexes([
      {
        key: { identificationNumber: 1 },
        name: "indexidentificationNumber",
        unique: true,
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { email: 1 },
        name: "indexemail",
        wiredTigerIndexConfig: 4096,
        collation: { locale: "es", strength: 1 },
      },
      {
        key: { lastname: 1 },
        name: "indexlastname",
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
