"use server";

import Form from "../lib/formSchema";
import connectToDatabase from "../lib/mongo";
import mongoose, { ObjectId } from "mongoose";

export async function listForms() {
  try {
    await connectToDatabase();
    const res = (await Form.find({})).map((f) => {
      return { _id: f._id, name: f.name, description: f.description };
    });
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
}
export async function createForm(
  id: string,
  name: string,
  description?: string
) {
  try {
    await connectToDatabase();
    const _id = new mongoose.Types.ObjectId(id);
    const form = new Form({
      _id,
      name,
      description,
    });
    await form.save();
    //   await Form.create({ name: name, description: description });
    return { message: "Form created successfully!" };
  } catch (e) {
    console.log(e);
    return e;
  }
}
export async function updateForm(
  id: ObjectId | string,
  name: string,
  description: string,
  questions: {
    _id: string;
    question: string;
    type: string;
    purpose?: string;
    required?: boolean;
    options?: string[];
    gridOptions?: {}[];
  }[]
) {
  try {
    await connectToDatabase();
    await Form.findByIdAndUpdate(id, {
      $set: { name, description, questions },
    });
    return { message: "Form updated!" };
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function getForm(id: ObjectId | string) {
  try {
    await connectToDatabase();
    const data = await Form.findById(id);
    if (!data) return "No data found";
    return JSON.stringify(data);
  } catch (e) {
    console.log(e);
    return { "error": "error" };
  }
}
