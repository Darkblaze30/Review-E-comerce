import { main, client } from "./helpers/db.js";
import { CRUD } from "./CRUD/main.js";
import { ObjectId } from "mongodb";


var message
const db = await main();

const usersCRUD = new CRUD(db.collection("users"));

const usersD = await usersCRUD.delete({ identificationNumber: "1122334455" });
console.log(message = usersD == 1?"Se Elimino el documento correctamente ✅": "No se pudo Eliminar el archivo ❌.");

// const  userC = await usersCRUD.createMany([
//     {
//       _id: new ObjectId("66376c1f1a3a111111111111"),
//       firstName: "Juan",
//       lastname: "Pérez",
//       identificationNumber: "123456789",
//       identificationType: "cc",
//       email: "juan@example.com",
//       phone: "3001234567",
//       password: "P12345",
//       userType: "C",
//       active: true,
//       registeredDate: new Date("2023-01-15"),
//       place: {}
//     },
//     {
//       _id: new ObjectId("66376c1f1a3a111111111112"),
//       firstName: "Laura",
//       lastname: "Gómez",
//       identificationNumber: "987654321",
//       identificationType: "cc",
//       email: "laura@example.com",
//       phone: "3017654321",
//       password: "S54321",
//       userType: "S",
//       active: true,
//       registeredDate: new Date("2023-03-20"),
//       place: {}
//     },
//     {
//       _id: new ObjectId("66376c1f1a3a111111111113"),
//       firstName: "Carlos",
//       lastname: "Martínez",
//       identificationNumber: "1122334455",
//       identificationType: "cc",
//       email: "carlos@example.com",
//       phone: "3021122334",
//       password: "C11111",
//       userType: "C",
//       active: true,
//       registeredDate: new Date("2024-01-01"),
//       place: {}
//     }
//   ]
//   )

//   console.log(userC);

const userU = await usersCRUD.update({identificationNumber: "123456789"},{firstName: "Hermenegildo"})
console.log(message = userU == 1?"Se modifico el documento correctamente ✅": "No se pudo modificar el archivo ❌.");

const userR = await usersCRUD.read()
console.log("El resultado de la busqueda fue", userR);

await client.close();
