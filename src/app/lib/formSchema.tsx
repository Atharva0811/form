"use server"
import mongoose, { Schema } from "mongoose";
const topicSchema = new Schema(
  {
    name: String,
    description: String,
    questions:[],
  },
  {
    collection: "form",
    timestamps: true,
  }
);
const Form = mongoose.models.form || mongoose.model("form", topicSchema);
export default Form;
