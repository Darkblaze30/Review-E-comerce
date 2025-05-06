import { ObjectId } from "mongodb"

let data;
export default data = [
    {
      _id: new ObjectId("66376c1f1a3a333333333331"),
      code: "PRD001",
      name: "Audífonos Bluetooth",
      description: "Audífonos inalámbricos con micrófono",
      image: "https://example.com/audifonos.jpg",
      price: 150000,
      stock: 25,
      condition: "new",
      vat: 19,
      categoryId: new ObjectId("66376c1f1a3a222222222221"),
      active: true
    },
    {
      _id: new ObjectId("66376c1f1a3a333333333332"),
      code: "PRD002",
      name: "Licuadora 1.5L",
      description: "Licuadora de vaso de vidrio para cocina",
      image: "https://example.com/licuadora.jpg",
      price: 180000,
      stock: 15,
      condition: "new",
      vat: 19,
      categoryId: new ObjectId("66376c1f1a3a222222222222"),
      active: true
    }
  ]
  
