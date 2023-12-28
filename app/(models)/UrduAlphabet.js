import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const urduLettersSchema = new Schema({
  romanLetter: String,
  urduLetter: String,
});

const UrduAlphabet =
  mongoose.models.urducollection ||
  mongoose.model("urducollection", urduLettersSchema);
export default UrduAlphabet;
