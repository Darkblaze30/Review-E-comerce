import {client, main} from './../helpers/db.js'
import { ObjectId } from 'mongodb';

const db = await main();
const sales = db.collection("sales")
