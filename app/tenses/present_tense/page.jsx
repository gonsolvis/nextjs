import React from 'react';
import presentTenseData from '@/app/data/tenses/present_tense';

function PresentTense() {
  const hona_verb = presentTenseData.hona_verb
  const example_verb = presentTenseData.example_verb
  console.log("data", example_verb)
  return (
    <div className="h-full flex justify-center items-center overflow-y-auto">
      <div className="p-8 rounded-lg text-black">
        <h1 className="text-3xl mb-4">Present Tense</h1>

        <div className="mb-6">
          <h2 className="text-2xl mb-2 text-justify">Introduction</h2>
          <p className="text-justify mb-4">
            It's important to use the verb "Hona" as an auxiliary verb in the construction of the different tenses. This is
            why in each tense we cover we will first learn how to form "Hona".
          </p>
          <p className="text-justify">
            The Present tense in Hindi denotes a frequent action, an action which always takes place. The action is not tied
            to any particular tense and can be extended to all tenses. We can use this tense to describe an action, a
            characteristic of something or someone, a universal truth, or a state.
          </p>
        </div>
        <table className="bg-purple text-white w-full table-auto border-collapse border text-justify mb-5">
          <thead>
            <tr>
              <th className="border p-2 text-center">Subject</th>
              <th className="border p-2 text-center">Subject Hindi</th>
              <th className="border p-2 text-center">Hona</th>
              <th className="border p-2 text-center">Example</th>
          
            </tr>
          </thead>
          <tbody>
            {hona_verb.map((item, index) => (
              <tr className="hover:bg-lesspurple" key={index}>
                <td className="border p-2 text-center sm:text-base">{item.Subject}</td>
                <td className="border p-2 text-center sm:text-base">
                  {item.Subject_deva} <span className="italic ml-1">{item.Subject_latin}</span>
                </td>
                <td className="border p-2 text-center sm:text-base text-2xl">
                  {item.Hona_deva} <span className="italic ml-1">{item.Hona_latin}</span>
                </td>
                <td className="border p-2 text-center sm:text-base text-2xl">
                  {item.Example_deva} <span className="italic ml-1">{item.Example_latin}</span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table> 

        <table className="bg-purple text-white w-full table-auto border-collapse border text-justify">
          <thead>
            <tr>
              <th className="border p-2 text-center">Subject</th>
              <th className="border p-2 text-center">Subject Hindi</th>
              <th className="border p-2 text-center">Conjugation</th>
              <th className="border p-2 text-center">Hona</th>
              <th className="border p-2 text-center">Example</th>
          
            </tr>
          </thead>
          <tbody>
            {example_verb.map((item, index) => (
              <tr className="hover:bg-lesspurple" key={index}>
                <td className="border p-2 text-center sm:text-base">{item.Subject}</td>
                <td className="border p-2 text-center sm:text-base">
                  {item.Subject_deva} <span className="italic ml-1">{item.Subject_latin}</span>
                </td>
                <td className="border p-2 text-center sm:text-base text-2xl">
                  {item.Conjugation_deva} <span className="italic ml-1">{item.Conjugation_latin}</span>
                </td>
                <td className="border p-2 text-center sm:text-base text-2xl">
                  {item.Hona_deva} <span className="italic ml-1">{item.Hona_latin}</span>
                </td>
                <td className="border p-2 text-center sm:text-base text-2xl">
                  {item.Example_deva} <span className="italic ml-1">{item.Example_latin}</span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PresentTense;
