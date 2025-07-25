"use client";

import { createForm, getForm, updateForm } from "@/app/server/form";
import { useEffect, useState } from "react";
const data = [
  {
    _id: "Q1",
    question: "",
    type: "text",
    options: [""],
    gridOptions:[],
    required: false,
    purpose: "",
  },
];
const formname = "Business form";

export default function editForm() {
  const [q, setQ] = useState<
    {
      _id: string;
      question: string;
      type: string;
      purpose?: string;
      required?: boolean;
      options?: string[];
      gridOptions?: {}[];
    }[]
  >([]);
  const [formName, setFormName] = useState("");
  const [description, setDescription] = useState("");
  async function getData() {
    const formId = window.location.pathname.slice(11);
    const res: any = await getForm(formId);
    if (res != "No data found") {
      const r: { questions: []; name: string; description: string } =
        JSON.parse(res);
      if (r.questions.length == 0) {
        setQ(data);
      } else {
        setQ(r.questions);
      }
      setFormName(r.name);
      setDescription(r.description);
    } else {
      setQ(data);
      createForm(formId, "", "");
    }
  }
  async function saveForm() {
    const formId = window.location.pathname.slice(11);
    const res: any = await updateForm(formId, formName, description, q);
    alert(res.message);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-slate-200 text-slate-900 px-4 md:px-8 pt-8 pb-16 space-y-4 items-center flex flex-col">
      <div className="bg-white w-full max-w-5xl rounded-3xl py-8 flex flex-col space-y-8 shadow border border-slate-200">
        <div className="px-4 md:px-8 py-2 flex">
          <input
            type="text"
            name="formName"
            id="formName"
            placeholder="Form Name"
            value={formName}
            onChange={(e) => {
              setFormName(e.target.value);
            }}
            className="mx-auto text-center font-bold text-2xl md:text-3xl placeholder-slate-800 focus:placeholder-slate-300 focus:outline-none focus:border-b border-slate-300 p-2"
          />
        </div>
        <div className="px-4 md:px-8 py-2 flex">
          <textarea
            name="formName"
            id="formName"
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="md:w-1/2 w-11/12 mx-auto text-center font-bold text-md md:text-lg placeholder-slate-800 focus:placeholder-slate-300 focus:outline-none focus:border-b border-slate-300 p-2"
          />
        </div>
      </div>
      {q.map((question, index) => {
        return (
          <div
            key={question._id}
            className="bg-white w-full max-w-5xl rounded-3xl py-8 flex flex-col space-y-8 shadow border border-slate-200"
          >
            <div className="px-4 md:px-8 py-2 grid grid-cols-8 gap-4">
              <div className="col-span-6 focus-within:border-b border-slate-300 flex items-center px-2 space-x-2">
                <h1>{index + 1}.</h1>
                <input
                  type="text"
                  className="px-2 py-2 w-full placeholder-slate-300 outline-none focus:bg-slate-100"
                  name={`question${index + 1}`}
                  id={`question${index + 1}`}
                  value={question.question}
                  onChange={(e) => {
                    const newQ = [...q];
                    newQ[index] = {
                      ...newQ[index],
                      question: e.target.value,
                    };
                    setQ(newQ);
                  }}
                  placeholder={`Question ${index + 1}`}
                  required
                />
              </div>
              <select
                className="border rounded-md col-span-2 px-4 py-2 text-sm flex ml-auto border-slate-300"
                name={`type${index + 1}`}
                id={`type${index + 1}`}
                defaultValue={question.type}
                onChange={(e) => {
                  const newQ = [...q];
                  newQ[index] = {
                    ...newQ[index],
                    type: e.target.value,
                  };
                  setQ(newQ);
                }}
              >
                <option value="text">Text</option>
                <option value="textarea">Textarea</option>
                <option value="radio">Radio</option>
                <option value="checkbox">Checkbox</option>
                <option value="grid">Grid</option>
                <option value="mcg">Multi Choice Grid</option>
              </select>
              {(question.type == "radio" || question.type == "checkbox") && (
                <div className="col-span-8 px-4 w-full flex flex-col space-y-4">
                  <h1 className="font-semibold">Options:</h1>
                  {question.options?.map((o, i) => {
                    return (
                      <div className="w-full flex" key={"option" + i + 1}>
                        <input
                          type="text"
                          className="px-4 py-2 w-full col-span-3 border-b border-slate-300 placeholder-slate-300 outline-none focus:bg-slate-100"
                          name={`option ${i + 1}`}
                          id={`option ${i + 1}`}
                          value={o}
                          placeholder={`option ${i + 1}`}
                          onChange={(e) => {
                            const newQ = [...q];
                            if (newQ[index].options) {
                              const newOpt = [...newQ[index].options!];
                              newOpt[i] = e.target.value;
                              newQ[index] = {
                                ...newQ[index],
                                options: newOpt,
                              };
                              setQ(newQ);
                            }
                          }}
                          required
                        />
                        <button
                          className="rotate-45 text-3xl font-light"
                          onClick={() => {
                            const newQ = [...q];
                            if (newQ[index].options) {
                              const newOpt = newQ[index].options?.filter(
                                (_, qu) => qu !== i
                              );
                              newQ[index] = {
                                ...newQ[index],
                                options: newOpt,
                              };
                              setQ(newQ);
                            }
                          }}
                        >
                          +
                        </button>
                      </div>
                    );
                  })}
                  <div className="flex items-center">
                    <button
                      className="mx-auto text-slate-300 hover:text-slate-500 font-light hover:scale-110 duration-200 text-lg border rounded-full px-2"
                      onClick={() => {
                        const newQ = [...q];
                        newQ[index].options?.push("");
                        setQ(newQ);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
              <input
                type="text"
                name={`purpose${index + 1}`}
                id={`purpose${index + 1}`}
                placeholder={`Purpose (optional)`}
                value={question.purpose}
                onChange={(e) => {
                  const newQ = [...q];
                  newQ[index] = {
                    ...newQ[index],
                    purpose: e.target.value,
                  };
                  setQ(newQ);
                }}
                className="px-4 py-2 col-span-6 border-b border-slate-300 placeholder-slate-300 outline-none focus:bg-slate-100"
              />
              <div className="ml-auto items-end flex col-span-2">
                <div className="flex px-4 items-center space-x-4 border-r border-slate-300">
                  <label htmlFor="required">Required</label>
                  <input
                    type="checkbox"
                    name={`required${index + 1}`}
                    checked={question.required}
                    onChange={(e) => {
                      const newQ = [...q];
                      newQ[index] = {
                        ...newQ[index],
                        required: e.target.checked,
                      };
                      setQ(newQ);
                    }}
                    id={`required${index + 1}`}
                    className="size-5"
                  />
                </div>
                <div className="pl-4 text-red-400 font-semibold">
                  <button
                    onClick={() => {
                      const newQ = q.filter((qu) => qu._id !== question._id);
                      setQ(newQ);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <button
          className="bg-white rounded-full px-2 text-4xl font-extralight border border-slate-300 hover:border-slate-400 text-slate-300 shadow-md hover:scale-110 hover:text-slate-500 duration-200"
          onClick={() => {
            setQ([
              ...q,
              {
                _id: "Q" + (q.length.toString() + 1),
                question: "",
                required: false,
                type: "text",
                options: [""],
                gridOptions:[],
                purpose: "",
              },
            ]);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            saveForm();
          }}
          className="px-4 p-2 text-white bg-green-600 font-semibold rounded-lg focus:scale-105 focus:bg-green-400"
        >
          Save
        </button>
      </div>
    </div>
  );
}
