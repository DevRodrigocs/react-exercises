"use client"

import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState<Person>({ name: 'Rodrigo', lastname: 'Collaco'});

  const handleClearButton = () => {
    setFullName({name: '', lastname: ''});
  }

  return ( 
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input 
       type="text"
       placeholder="Name"
       className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
       value={fullName.name}
       onChange={e => setFullName({ ...fullName, name: e.target.value })}
       />
      <input 
       type="text"
       placeholder="Lastname"
       className="border border-black p-3 text-2xl text-black rounded-md mb-3" 
       value={fullName.lastname}
       onChange={e => setFullName({ ...fullName, lastname: e.target.value })}
       />

      <p>My full name is:</p>
      <p>{fullName.name} {fullName.lastname}</p>

      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-3 hover:bg-red-600 transition-colors"
        onClick={handleClearButton}
      >
        Clear All
      </button>
    </div>
  );
}

export default Page;