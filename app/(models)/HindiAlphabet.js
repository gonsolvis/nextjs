import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const hindiLettersSchema = new Schema({
  type: String,
  letters: [
    {
      romanLetter: String,
      urduLetter: String,
    },
  ],
});

const hindiAlphabet =
  mongoose.models.hindicollection ||
  mongoose.model("hindicollection", hindiLettersSchema);
export default hindiAlphabet;
