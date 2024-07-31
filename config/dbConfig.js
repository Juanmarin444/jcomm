require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB is Connected");
    // const db = mongoose.connection.useDb('myShop');
    // return db;
  } catch (e) {
    console.log(e);
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
}

module.exports = connectDB;
