import mongoose from "mongoose";
const Schema = mongoose.Schema;

const newSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  snippet: {
    type: String,
  },
  markdown: {
    type: String,
    required: true,
  },
  sanitizedHtml: {
    type: String,
    required: true,
  },
  keywords: {
    type: [String],
  },
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
  component: {
    type: String,
    default: "Square",
  },
});

const New = mongoose.models.New || mongoose.model("New", newSchema);
export default New;
