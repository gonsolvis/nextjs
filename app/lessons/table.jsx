import React from "react";

const Table = (props) => {
  return (
    <div className="overflow-x-auto my-6">
      <table className=" bg-purple text-white w-full table-auto border-collapse border text-justify">
        <thead>
          <tr>
            <th className="border p-2"> </th>
            <th className="border p-2">Latin Letter</th>
            <th className="border p-2"> Roman Letter</th>
          </tr>
        </thead>
        <tbody>
          {props.Letters.map((letter, index) => (
            <tr className=" hover:" key={index}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">{letter.romanLetter}</td>
              <td className="border p-2 text-lg">{letter.urduLetter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
