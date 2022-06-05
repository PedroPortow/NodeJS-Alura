import mongoose from "mongoose"

mongoose.connect("mongodb+srv://pedro:123@pedro.19y1hkp.mongodb.net/teste")

let db = mongoose.connection;

export default db
