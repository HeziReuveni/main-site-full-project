const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsapp: {
      type: String,
      required: true,
    },
    facebookSrc: {
      type: String,
      required: true,
    },
    services: {
      type: String,
      required: true,
    },
    namesImages: [String],
  },
  {
    timestamps: true,
  }
);

const Details = mongoose.model("Details", workoutSchema);
module.exports = Details;
