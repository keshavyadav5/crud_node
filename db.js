const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};
db()

module.exports = mongoose;