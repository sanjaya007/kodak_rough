import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/kodak";

const connectDB = async () => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successfull !!");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
