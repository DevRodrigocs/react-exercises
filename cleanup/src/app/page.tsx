"use client"

import { Square } from "@/components/Square";
import { useState } from "react";

const Page = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
     <button onClick={() => setShow(!show)}>Show/Hide</button>

     {show && <Square />}
    </div>
  );
}

export default Page;