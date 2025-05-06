import { ObjectId } from "mongodb"

let data;
export default data = [
    {
      _id: new ObjectId("66376c1f1a3a111111111111"),
      firstName: "Juan",
      lastname: "Pérez",
      identificationNumber: "123456789",
      identificationType: "cc",
      email: "juan@example.com",
      phone: "3001234567",
      password: "P12345",
      userType: "C",
      active: true,
      registeredDate: new Date("2023-01-15"),
      place: {}
    },
    {
      _id: new ObjectId("66376c1f1a3a111111111112"),
      firstName: "Laura",
      lastname: "Gómez",
      identificationNumber: "987654321",
      identificationType: "cc",
      email: "laura@example.com",
      phone: "3017654321",
      password: "S54321",
      userType: "S",
      active: true,
      registeredDate: new Date("2023-03-20"),
      place: {}
    },
    {
      _id: new ObjectId("66376c1f1a3a111111111113"),
      firstName: "Carlos",
      lastname: "Martínez",
      identificationNumber: "1122334455",
      identificationType: "cc",
      email: "carlos@example.com",
      phone: "3021122334",
      password: "C11111",
      userType: "C",
      active: true,
      registeredDate: new Date("2024-01-01"),
      place: {}
    }
  ]
  