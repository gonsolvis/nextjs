"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HindiLetterForm = () => {
  const router = useRouter();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/HindiLetters", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create ticketttts");
    }
    router.refresh();
    router.push("/");
  };

  const startingPlaceholderData = {
    romanLetter: "",
    description: "",
    status: "not started",
  };
  const [formData, setFormData] = useState(startingPlaceholderData);
  return (
    <div>
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Create form</h3>
        <label> Latin Letter</label>
        <input
          id="romanLetter"
          name="romanLetter"
          onChange={handleChange}
          required={true}
          value={formData.romanLetter}
        ></input>
        <label> Urdu Letter</label>
        <input
          id="HindiLetter"
          name="HindiLetter"
          onChange={handleChange}
          required={true}
          value={formData.HindiLetter}
        ></input>

        <input
          type="submit"
          className="btn bg-slate-600"
          value="Create Ticket"
        />
      </form>
    </div>
  );
};

export default HindiLetterForm;
