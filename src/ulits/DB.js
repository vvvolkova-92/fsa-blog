import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB);
  } catch (e) {
    throw new Error("Неудачная попытка соединения")
  }
}

export default connect;