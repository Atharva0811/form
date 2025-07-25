export default function textbox(
  index: number,
  question: string,
  purpose?: string,
  required?: boolean,
  placeholder?: string
) {
  return (
    <div className="space-y-3 md:text-lg" key={(index+1)+question}>
      <h1 className="font-bold">{question}</h1>
      <div>
        <input
          className="sm:w-3/5 w-11/12 p-4 h-10 border border-slate-300 rounded-sm placeholder-slate-300"
          type="text"
          name={(index+1)+question}
          id={(index+1)+question}
          placeholder={placeholder}
          required={required}
        />
        <h2
          className="text-xs md:text-sm text-slate-400 px-1 pt-1"
          hidden={purpose ? false : true}
        >
          {purpose}
        </h2>
      </div>
    </div>
  );
}
