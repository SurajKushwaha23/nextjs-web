import "dotenv/config";
import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connect", () => {
      console.log("Mongodb connected");
    });
    connection.on("error", () => {
      console.log("Mongodb not connected");
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}
