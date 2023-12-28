import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const urduAlphabetSchema = new Schema({
  Letter: String,
  Symbol: String,
});

const urduAlphabet =
  mongoose.models.urduAlphabet ||
  mongoose.model("urduAlphabet", urduAlphabetSchema);

export default urduAlphabet;
