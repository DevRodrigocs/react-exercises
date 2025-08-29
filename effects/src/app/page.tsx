"use client"

import { useEffect, useState } from "react";

const Page = () => {
  /*
  1. Definition of the function that will run.
  2. Definition of WHEN it will run.
  3. Defining what to do when the component disappears/unload.
  */

  const [firstName, setFirstName] = useState('Rodrigo');
  const [lastName, setLastName] = useState('Collaco');

  const fullName = firstName + ' ' + lastName;

  return (
    <div className="">
      <p>My name is {fullName}</p>
      <hr/>
      <button className="border boder-blue-400 m-3 p-3" onClick={() => setFirstName('Pedro')}>Switch to Pedro</button>
      <button className="border boder-blue-400 m-3 p-3" onClick={() => setFirstName('João')}>Switch to João</button>
    </div>
  );
}

export default Page;