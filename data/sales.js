import { ObjectId } from "mongodb";

let data;
export default data = [
  {
    _id: new ObjectId("66376c1f1a3a555555555551"),
    reference: 1001,
    date: new Date("2024-05-01"),
    paymentMethod: new ObjectId("66376c1f1a3a444444444441"),
    client: new ObjectId("66376c1f1a3a111111111111"),
    seller: new ObjectId("66376c1f1a3a111111111112"), // corregido
    details: [
      {
        productId: new ObjectId("66376c1f1a3a333333333331"),
        quantity: 2,
        price: 150000,
      },
    ],
  },
  {
    _id: new ObjectId("66376c1f1a3a555555555552"),
    reference: 1002,
    date: new Date("2024-05-03"),
    paymentMethod: new ObjectId("66376c1f1a3a444444444442"),
    client: new ObjectId("66376c1f1a3a111111111113"),
    seller: new ObjectId("66376c1f1a3a111111111112"), // corregido
    details: [
      {
        productId: new ObjectId("66376c1f1a3a333333333332"),
        quantity: 1,
        price: 180000,
      },
      {
        productId: new ObjectId("66376c1f1a3a333333333331"),
        quantity: 1,
        price: 150000,
      },
    ],
  },
];
