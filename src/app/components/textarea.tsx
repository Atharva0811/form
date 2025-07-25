export default function textarea(
  index:number,
  question: string,
  purpose?: string,
  required?: boolean,
  placeholder?: string
) {
  return (
    <div className="space-y-3 md:text-lg" key={(index+1)+question}>
      <h1 className="font-bold">{question}</h1>
      <div>
        <textarea
          className="sm:w-3/5npm  w-11/12 p-4 min-h-40 border border-slate-300 rounded-sm placeholder-slate-300"
          placeholder={placeholder}
          required={required}
          name={(index+1)+question}
          id={(index+1)+question}
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
