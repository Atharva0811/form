"use server";

import Response from "../lib/responseSchema";
import connectToDatabase from "../lib/mongo";
import { ObjectId } from "mongoose";

export async function saveFormResponse(formId: ObjectId | string, res: any[]) {
  try {
    await connectToDatabase();
    const formRes = await Response.findById(formId);
    if (!formRes) {
      const newRes = new Response({
        _id: formId,
        formResponses: [
          {
            response: res,
          },
        ],
      });
      await newRes.save();
      return {
        message: "New form responses created, response saved successfully",
      };
    } else {
      const newRes = {
        response: res,
        createdAt: new Date(),
      };
      const updRes = await Response.findByIdAndUpdate(formId, {
        $push: {
          formResponses: newRes,
        },
      });
      if (!updRes) return { message: "Invalid data" };
      else return { message: "Response saved successfully" };
    }
  } catch (e) {
    console.log(e);
    return { message: e };
  }
}
