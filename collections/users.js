export async function usersCollection(db) {
  await db.createCollection("users", {
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
        additionalProperties: false,
        properties: {
          firstName: {
            bsonType: "string",
          },
          lastname: {
            bsonType: "string",
          },
          identificationNumber: {
            bsonType: "string",
          },
          indentificationType: {
            bsonType: "string",
            enum: ["cc", "it", "ps", "nit"],
          },
          email: {
            bsonType: "string",
          },
          phone: {
            bsonType: "string",
            pattern:
              "^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$",
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
            bsonType: "array",
            uniqueItems: true,
            enum: ["A", "C", "S"],
          },
          active: {
            bsonType: "bool",
          },
          registeredDate: {
            bsonType: "date",
          },
        },
      },
    },
  });
}
