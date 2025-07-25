export default function grid(
  index:number,
  question: string,
  gridOptions: {}[] | undefined,
  purpose?: string
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
      <div className="space-y-3">
        <table className="md:border-spacing-x-2 md:border-separate w-full">
          <tbody>
            {gridOptions?.map((opt: any) => {
              var k = Object.keys(opt)[0];
              var val = opt[k];
              return (
                <tr key={"grid" + k} className="md:space-y-0 space-y-2">
                  <td className="md:table-cell flex md:mt-0 mt-2 md:pr-4">
                    {k}:
                  </td>
                  {val.map((v: any) => {
                    return (
                      <td
                        key={"grid" + v}
                        className="md:table-cell flex md:ml-0 ml-4"
                      >
                        <div className="space-x-2 flex items-center ">
                          <input
                            className="size-5"
                            type="checkbox"
                            value={v}
                            name={(index+1)+question+":"+k}
                            id={(index+1)+v}
                          />
                          <label htmlFor={"grid" + v}>{v}</label>
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
