import { usersCollection } from "./users.js";
import { salesCollection } from "./sales.js";
import { paymentMetodsCollection } from "./paymentMetods.js";
import { categoriesCollection } from "./categories.js";
import { productsCollection } from "./products.js";
import { client, main } from "./../helpers/db.js";

const db = await main();

try {
  await usersCollection(db);
  await salesCollection(db);
  await paymentMetodsCollection(db);
  await categoriesCollection(db);
  await productsCollection(db);
  console.log("colecciones creadas con exito");
} catch (error) {
  console.log("error al crear colleciones");
  console.log(error);
}

await client.close();
