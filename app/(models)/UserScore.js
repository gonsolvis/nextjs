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
  },
  {
    timestamps: true,
  }
);

const UserScore =
  mongoose.models.testuserscorecollection ||
  mongoose.model("testuserscorecollection", userScoreSchema);
export default UserScore;
