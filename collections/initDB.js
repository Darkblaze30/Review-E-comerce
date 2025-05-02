import { SalesCollection } from "./sales.js";
import { ProductsCollection } from "./products.js";
import { client, main } from "./../helpers/db.js";

const db = await main();
const session = db.client.startSession();

try {
  const config = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };

  const salesColl = new SalesCollection();
  const productsColl = new ProductsCollection();

  await session.withTransaction(async () => {
    console.log("Generando colección de sales...");
    await salesColl.generateCollection(db);
    console.log("Generando colección de products...");
    await productsColl.generateCollection(db);
    console.log("Colecciónes generadas exitosamente.");
  }, config);
} catch (error) {
  console.log("No se pudieron crear las colleciones...");
  console.log(error);
} finally {
  if (session.transaction.isActive) await session.abortTransaction();
  await session.endSession();
  await client.close();
}
