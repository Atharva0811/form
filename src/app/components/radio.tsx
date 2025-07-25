export default function radio(
  index:number,
  question: string,
  option: string[] | undefined,
  purpose?: string,
  required?: boolean
) {
  return (
    <div className="space-y-3 md:text-lg" key={(index+1)+question}>
      <div>
        <h1 className="font-bold">{question}</h1>
        <h2
          className="text-xs sm:text-sm text-slate-400 px-1 pt-1"
          hidden={purpose ? false : true}
        >
          {purpose}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
        {option?.map((val) => {
          return (
            <div className="flex items-center space-x-2" key={"radio"+val}>
              <input
                className="size-5"
                type="radio"
                value={val}
                name={(index+1)+question}
                id={"radio-" + val}
                required={required}
              />
              <label htmlFor={"radio-" + val}>{val}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
