import mongoose from "mongoose";

mongoose.connect('mongodb://db:27017');

let db = mongoose.connection;

export default db;