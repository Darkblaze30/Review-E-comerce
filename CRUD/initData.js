import userData from './../data/users.js'
import paymentMethodData from './../data/paymentMetods.js'
import productsData from './../data/products.js'
import categoryData from '../data/category.js';
import salesData from '../data/sales.js';
import { client, main } from "./../helpers/db.js";
import { CRUD } from './main.js';

const db = await main();
const session = db.client.startSession();

try {
  const config = {
    readPreference: "primary",
    readConcern: { level: "local" },
    writeConcern: { w: "majority" },
  };
const categoryColl = db.collection("categories")
  const category = new CRUD(categoryColl)
const paymentMetodsColl = db.collection("paymentMetods")
  const paymentMetods = new CRUD(paymentMetodsColl)
const usersColl = db.collection("users")
  const users = new CRUD(usersColl)
const productsColl = db.collection("products")
  const products = new CRUD(productsColl)
const salesColl = db.collection("sales")
  const sales = new CRUD(salesColl)

  await session.withTransaction(async () => {
    console.log("Insertando datos en la colección de users...");
    await users.createMany(userData);
    console.log("Insertando datos en la colección de paymentMethod...");
    await paymentMetods.createMany(paymentMethodData);
    console.log("Insertando datos en la colección de products...");
    await products.createMany(productsData);
    console.log("Insertando datos en la colección de category...");
    await category.createMany(categoryData);
    console.log("Insertando datos en la colección de sales...");
    await sales.createMany(salesData);
    console.log("se insertaron todos los datos correctamente ✅.");
  }, config);
} catch (error) {
  console.log("No se pudo insertar la data ❌.");
  console.log(error);
} finally {
  if (session.transaction.isActive) await session.abortTransaction();
  await session.endSession();
  await client.close();
}
