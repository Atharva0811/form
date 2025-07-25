"use server";
import mongoose, { Schema } from "mongoose";
// const topicSchema = new Schema(
//   {
//     responses: [
//       {
//         summary: [],
//         createdAt: Date,
//       },
//     ],
//   },
//   {
//     collection: "form",
//     timestamps: true,
//   }
// );

const responseSchema = new Schema({
  response: {
    type: [
      {
        type: mongoose.Schema.Types.Mixed,
      },
    ],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const formSchema = new Schema(
  {
    formResponses: {
      type: [responseSchema],
      default: [],
    },
  },
  {
    collection: "responses",
    timestamps: true,
  }
);

const Responses =
  mongoose.models.responses || mongoose.model("responses", formSchema);
export default Responses;
