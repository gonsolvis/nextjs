import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userScoreSchema = new Schema(
  {
    score: {
      type: Number,
      required: true,
      trim: true,
    },
    lives: {
      type: Number,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserScore =
  mongoose.models.testuserscorecollectionb ||
  mongoose.model("testuserscorecollectionb", userScoreSchema);
export default UserScore;
