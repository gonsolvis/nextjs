import React from "react";

const Table = (props) => {
  return (
    <div className="overflow-x-auto my-6">
      <table className="bg-purple text-white w-full table-auto border-collapse border text-justify">
        <thead>
          {props?.Letters[0]?.example ? (
            <tr>
              <th className="border p-2 text-center">Vowel</th>
              <th className="border p-2 text-center"> Independent</th>
              <th className="border p-2 text-center"> क + Vowel</th>
            </tr>
          ) : (
            <tr>
              <th className="border p-2 text-center"> </th>
              <th className="border p-2 text-center">Latin Letter</th>
              <th className="border p-2 text-center"> Script</th>
            </tr>
          )}
        </thead>
        <tbody>
          {props.Letters.map((letter, index) => (
            <tr className="hover:bg-lesspurple" key={index}>
              {letter.example ? (
                ""
              ) : (
                <td className="border p-2 text-center text-sm">{index + 1}</td>
              )}

              <td className="border p-2 text-center  sm:text-base">
                {letter.romanLetter}
              </td>
              <td className="border p-2 text-center sm:text-base text-2xl">
                {letter.urduLetter ? letter.urduLetter : letter.hindiLetter}
              </td>
              {letter.example && (
                <td className="border p-2 text-center text-2xl sm:text-base">
                  {letter.example}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
