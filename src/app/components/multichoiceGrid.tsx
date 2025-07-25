export default function multichoiceGrid(
  index: number,
  question: string,
  option: {}[] | undefined,
  purpose?: string,
  required?: boolean
) {
  return (
    <div className="space-y-3 md:text-lg" key={index + 1 + question}>
      <div>
        <h1 className="font-bold">{question}</h1>
        <h2
          className="text-xs sm:text-sm text-slate-400 px-1 pt-1"
          hidden={purpose ? false : true}
        >
          {purpose}
        </h2>
      </div>
      <div className="space-y-3">
        <table className="md:border-spacing-x-2 md:border-separate w-full">
          <tbody>
            {option?.map((opt: any) => {
              var k = Object.keys(opt)[0];
              var val = opt[k];
              return (
                <tr key={"mcg" + k} className="md:space-y-0 space-y-2">
                  <td className="md:table-cell flex md:mt-0 mt-2 md:pr-4">
                    {k}:
                  </td>
                  {val.map((v: any) => {
                    return (
                      <td
                        key={"mcg" + v}
                        className="md:table-cell flex md:ml-0 ml-4"
                      >
                        <div className="space-x-2 flex items-center ">
                          <input
                            className="size-5"
                            type="radio"
                            value={v}
                            name={index + 1 + question + ":" + k}
                            id={index + 1 + v}
                            required={required}
                          />
                          <label htmlFor={"mcg" + v}>{v}</label>
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
  );
}
