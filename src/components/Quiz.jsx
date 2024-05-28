import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const Quiz = ({ questions }) => {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeQuestion = userAnswer.length;
  console.log(activeQuestion);

  return (
    <div className="w-[50vw] min-w-[375px] bg-green-600 h-[50vh] rounded-lg mx-auto my-[5%]">
      <div className="animate-pulse flex flex-col space-y-4">
      <ProgressBar timer={ questions[activeQuestion]  15 * 1000  } />
      
      </div>
    </div>
  );
};

export default Quiz;

const variable = (
  <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);
