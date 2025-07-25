export default function checkbox(
  index:number,
  question: string,
  option: string[],
  purpose?: string,
  required?: boolean
) {
  return (
    <div className="space-y-3 md:text-lg" key={(index+1)+question}>
      <div>
        <h1 className="font-bold">{question}</h1>
        <h2
          className="text-xs md:text-sm text-slate-400 px-1 pt-1"
          hidden={purpose ? false : true}
        >
          {purpose}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
        {option.map((val) => {
          return (
            <div className="flex items-center space-x-2" key={"checkbox" + val}>
              <input
                className="size-5"
                type="checkbox"
                value={val}
                name={(index+1)+question}
                id={(index+1)+val}
                // required={required}
              />
              <label htmlFor={"checkbox" + val}>{val}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
