"use client";
export default function Home() {
  const data = {
    questions: [
      {
        question: "Product/ Service Brand Name",
        purpose: "To show in Google Ads required by Google",
        type: "text",
        required: true,
      },
      {
        question: "Product/ Service - Brief Description",
        purpose:
          "Our team & AI will understand about your product. Will help filtering good & bad keywords",
        type: "textarea",
        required: true,
      },
      {
        question: "Targeted Groups (TG)",
        purpose: "For Google Setup required by Google",
        type: "grid",
        options: [
          { "Age": ["Young age", "Middle age", "Old age"] },
          { "Gender": ["Male", "Female"] },
          { "Income Group": ["High", "Middle", "Low"] },
          {
            "Company Size": [
              "Upto to 250 employees",
              "250 to 1k employees",
              ">1k employees",
            ],
          },
        ],
        required: false,
      },
      {
        question:
          "Names of the other Channels (than Google Ads) that are used for Sales & Marketing",
        purpose: "For deriving ROI from various channels",
        type: "checkbox",
        options: [
          "Facebook",
          "Instagram",
          "LinkedIn",
          "Youtube",
          "SEO",
          "Distribution channels",
          "Blogs",
          "Mobile Marketing",
          "Email Marketing",
          "Snapchat",
          "Twitter",
          "Afflilate Marketing",
          "Events & Other",
        ],
      },
    ],
  };
  const option = [
    "Facebook",
    "Instagram",
    "LinkedIn",
    "Youtube",
    "SEO",
    "Distribution channels",
    "Blogs",
    "Mobile Marketing",
    "Email Marketing",
    "Snapchat",
    "Twitter",
    "Afflilate Marketing",
    "Events & Other",
  ];
  return (
    <div className="bg-slate-200 text-slate-900 px-4 md:px-8 pt-8 pb-16 space-y-4 items-center flex flex-col">
      <div className="max-w-5xl w-full">
        <img
          src="/image.png"
          className="w-full border border-slate-200 shadow h-36 md:h-44 rounded-3xl object-fill"
        />
      </div>
      <div className="bg-white w-full max-w-5xl rounded-3xl py-8 flex flex-col space-y-8 shadow border border-slate-200">
        <div className="px-4 md:px-8 py-2">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Business Information Intake form
          </h1>
        </div>
        <hr />
        <div className="flex flex-col px-4 md:px-8 w-full space-y-12">
          {/* Input box */}
          <div className="space-y-3 md:text-lg">
            <h1 className="font-bold">Business Name</h1>
            <div>
              <input
                className="sm:w-3/5
                 w-11/12 p-4 h-10 border border-slate-300 rounded-sm placeholder-slate-300"
                type="text"
                placeholder="Name"
              />
              <h2 className="text-xs md:text-sm text-slate-400 px-1 pt-1">
                For billing
              </h2>
            </div>
          </div>

          {/* Textarea */}
          <div className="space-y-3 md:text-lg">
            <h1 className="font-bold">
              Complete Company Address with PIN Code
            </h1>
            <div>
              <textarea
                className="sm:w-3/5 w-11/12 p-4 min-h-40 border border-slate-300 rounded-sm placeholder-slate-300"
                placeholder="Address"
              />
              <h2 className="text-xs md:text-sm text-slate-400 px-1 pt-1">
                For billing
              </h2>
            </div>
          </div>

          {/* Checkbox */}
          <div className="space-y-3 md:text-lg">
            <div>
              <h1 className="font-bold">
                Names of the other channels (than Google Ads) that are used for
                sales & Markrting
              </h1>
              <h2 className="text-xs md:text-sm text-slate-400 px-1 pt-1">
                Select more than one
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
              {option.map((val) => {
                return (
                  <div className="flex items-center space-x-2" key={val}>
                    <input
                      className="size-5"
                      type="checkbox"
                      name={val}
                      id={val}
                    />
                    <label htmlFor={val}>{val}</label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Radio button */}
          <div className="space-y-3 md:text-lg">
            <div>
              <h1 className="font-bold">
                Names of the other channels (than Google Ads) that are used for
                sales & Markrting
              </h1>
              <h2 className="text-xs sm:text-sm text-slate-400 px-1 pt-1">
                Select more than one
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
              {option.map((val) => {
                return (
                  <div className="flex items-center space-x-2" key={val}>
                    <input className="size-5" type="radio" name="r1" id={"radio-"+val} required />
                    <label htmlFor={"radio-"+val}>{val}</label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="space-y-3 md:text-lg">
            <div>
              <h1 className="font-bold">
                Names of the other channels (than Google Ads) that are used for
                sales & Markrting
              </h1>
              <h2 className="text-xs sm:text-sm text-slate-400 px-1 pt-1">
                Select more than one
              </h2>
            </div>
            <div className="space-y-3">
              <table className="md:border-spacing-x-2 md:border-separate w-full">
                <tbody>
                  {data.questions[2].options?.map((option: any) => {
                    var k = Object.keys(option)[0];
                    var val = option[k];
                    return (
                      <tr key={k} className="md:space-y-0 space-y-2">
                        <td className="md:table-cell flex md:mt-0 mt-2 md:pr-4">
                          {k}:
                        </td>
                        {val.map((v: any) => {
                          return (
                            <td
                              key={v}
                              className="md:table-cell flex md:ml-0 ml-4"
                            >
                              <div className="space-x-2 flex items-center ">
                                <input
                                  className="size-5"
                                  type="checkbox"
                                  name={k}
                                  id={v}
                                />
                                <label htmlFor={v}>{v}</label>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Multipe-choice Grid */}
          <div className="space-y-3 md:text-lg">
            <div>
              <h1 className="font-bold">
                Names of the other channels (than Google Ads) that are used for
                sales & Markrting
              </h1>
              <h2 className="text-xs sm:text-sm text-slate-400 px-1 pt-1">
                Select more than one
              </h2>
            </div>
            <div className="space-y-3">
              <table className="md:border-spacing-x-2 md:border-separate w-full">
                <tbody>
                  {data.questions[2].options?.map((option: any) => {
                    var k = Object.keys(option)[0];
                    var val = option[k];
                    return (
                      <tr key={k} className="md:space-y-0 space-y-2">
                        <td className="md:table-cell flex md:mt-0 mt-2 md:pr-4">
                          {k}:
                        </td>
                        {val.map((v: any) => {
                          return (
                            <td
                              key={v}
                              className="md:table-cell flex md:ml-0 ml-4"
                            >
                              <div className="space-x-2 flex items-center ">
                                <input
                                  className="size-5"
                                  type="radio"
                                  name={k}
                                  id={v}
                                />
                                <label htmlFor={v}>{v}</label>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
