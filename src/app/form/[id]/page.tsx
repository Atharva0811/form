"use client";
import checkbox from "@/app/components/checkbox";
import grid from "@/app/components/grid";
import multichoiceGrid from "@/app/components/multichoiceGrid";
import radio from "@/app/components/radio";
import textarea from "@/app/components/textarea";
import textbox from "@/app/components/textbox";
import { getForm } from "@/app/server/form";
import { saveFormResponse } from "@/app/server/response";
import { useEffect, useState } from "react";

export default function form({ params }: { params: Promise<{ id: string }> }) {
  const [_id, setId] = useState("");
  const [data, setData]: any = useState({});
  const [res, setRes] = useState(false);
  const [invd, setInvd] = useState(false);
  useEffect(() => {
    loadData();
  }, []);

  const filterObject = (originalObject: any) => {
    const transformedArray = [];
    for (const key of Object.keys(originalObject)) {
      const newKey = key.replace(/^\d+\s?/, "");
      const newPair: any = {};
      newPair[newKey] = originalObject[key];
      transformedArray.push(newPair);
    }
    return transformedArray;
  };

  async function loadData() {
    const { id } = await params;
    setId(id);
    const res: any = await getForm(id);
    if (res.error) {
      setInvd(true);
    }
    if (res != "No data found" && !res.error) {
      setData(JSON.parse(res));
      setRes(true);
    }
  }
  async function saveResponse() {
    const form: any = document.getElementById(_id);
    const formData = new FormData(form);
    const formDataObject: {
      [key: string]: FormDataEntryValue | FormDataEntryValue[];
    } = {};
    for (const [key, value] of formData.entries()) {
      if (formData.getAll(key).length > 1) {
        formDataObject[key] = formData.getAll(key);
      } else {
        formDataObject[key] = value;
      }
    }
    const res = filterObject(formDataObject);
    const response: any = await saveFormResponse(_id, res);
    alert(response?.message);
  }
  if (res && data)
    return (
      <form
        id={_id}
        action={saveResponse}
        className="bg-slate-200 text-slate-900 px-4 md:px-8 pt-8 pb-16 space-y-4 items-center flex flex-col"
      >
        <div className="max-w-5xl w-full">
          <img
            src="/image.png"
            className="w-full border border-slate-200 shadow h-36 md:h-44 rounded-3xl object-fill"
          />
        </div>
        <div className="bg-white w-full max-w-5xl rounded-3xl py-8 flex flex-col space-y-8 shadow border border-slate-200">
          <div className="px-4 md:px-8 py-2">
            <h1 className="text-2xl md:text-3xl font-semibold">{data.name}</h1>
          </div>
          <hr />
          <div className="flex flex-col px-4 md:px-8 w-full space-y-12">
            {data?.questions?.map((question: any, index: any) => {
              if (question.type == "text") {
                return textbox(
                  index,
                  question.question,
                  question.purpose,
                  question.required
                );
              }
              if (question.type == "textarea") {
                return textarea(
                  index,
                  question.question,
                  question.purpose,
                  question.required
                );
              }
              if (question.type == "checkbox") {
                if (question.options)
                  return checkbox(
                    index,
                    question.question,
                    question.options,
                    question.purpose,
                    question.required
                  );
              }
              if (question.type == "grid") {
                return grid(
                  index,
                  question.question,
                  question.gridOptions,
                  question.purpose
                );
              }
              if (question.type == "mcg") {
                return multichoiceGrid(
                  index,
                  question.question,
                  question.gridOptions,
                  question.purpose,
                  question.required
                );
              }
              if (question.type == "radio") {
                return radio(
                  index,
                  question.question,
                  question.options,
                  question.purpose,
                  question.required
                );
              }
            })}
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col items-center p-3">
          <button
            type="submit"
            id="submitButton"
            className="bg-blue-700 md:px-8 md:py-4 px-6 py-3 md:text-lg font-semibold rounded-xl border border-slate-300 shadow-2xl focus:scale-105 focus:bg-blue-600 duration-200 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    );
  if (invd)
    return (
      <div className="flex flex-col items-center mt-10 font-medium text-2xl">
        <h1>Invalid form</h1>
        <p>Please contact the administrator</p>
      </div>
    );
  return <div className="text-center mt-10 font-bold text-4xl">Loading...</div>;
}
