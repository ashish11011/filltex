import mongoose from "mongoose";

function connect() {
  mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

export default connect;
