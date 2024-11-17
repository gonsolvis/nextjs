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
      
          <p className="text-justify mb-4">
            The Present tense in Hindi denotes a frequent action, an action which always takes place. The action is not tied
            to any particular tense and can be extended to all tenses. We can use this tense to describe an action, a
            characteristic of something or someone, a universal truth, or a state.
          </p>
          <p className="text-justify mb-4">
          In Hindi, the present tense is formed by conjugating verbs based on the subject (who is doing the action) and the form of the verb (singular or plural, informal or formal). The process is linked to removing the "-na" (the infinitive marker) from the verb and adding appropriate endings based on the subject pronoun.
          We would then add the auxiliary verb to the end of the sentence that matches the subject and gender.
          </p>
          <table className="bg-purple text-white w-1/2 table-auto border-collapse border text-justify mb-5">
          <thead>
            <tr>
              <th className="border p-2 text-center">Verb Stem + Infinitive Suffix</th>
              <th className="border p-2 text-center">Infinitive Verb Form</th>
              <th className="border p-2 text-center">English</th>
      
        
            </tr>
          </thead>
          <tbody>
          
              <tr className="hover:bg-lesspurple" >
                <td className="border p-2 text-center sm:text-base">बोल (boL) + ना (Naa)</td>
                <td className="border p-2 text-center sm:text-base text-2xl">बोलना (boLaNaa)</td> 
                <td className="border p-2 text-center sm:text-base text-2xl">“To speak”</td> 
              </tr>
              <tr className="hover:bg-lesspurple">
    <td className="border p-2 text-center sm:text-base">खा (Khaa) + ना (Naa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">खाना (Khaanaa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">“To eat”</td>
</tr>

<tr className="hover:bg-lesspurple">
    <td className="border p-2 text-center sm:text-base">देख (Dekh) + ना (Naa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">देखना (Dekhnaa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">“To see”</td>
</tr>

<tr className="hover:bg-lesspurple">
    <td className="border p-2 text-center sm:text-base">सुन (Sun) + ना (Naa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">सुनना (Sunnnaa)</td>
    <td className="border p-2 text-center sm:text-base text-2xl">“To listen”</td>
</tr>

          </tbody>
        </table> 
        <p className="text-justify mb-4">
            It's important to use the verb "Hona" as an auxiliary verb in the construction of the different tenses. This is
            why in each tense we cover we will first learn how to form "Hona".
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
        <p className="text-justify mb-4">
      Now let's put it all together! Below we can see an example of how to form the present tense with the verb: "To Do - Karta"
          </p>

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
