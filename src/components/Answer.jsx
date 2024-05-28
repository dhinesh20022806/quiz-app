import React from "react";

const Answer = ({ answers, onClick }) => {
  return (
    <ul className="bg-gray-500 space-y-3 p-2 w-[80%] h-[80%] ">
      {answers.map((answer) => (
        <li
        className="flex justify-center"
          
          key={answer}
        >
          <button className="bg-gray-200 p-3 rounded-3xl w-[80%] hover:bg-gray-800 hover:text-white text-xl font-abrilFatface " onClick={() => onClick(answer)}>{answer}</button>
        </li>
      ))}
    </ul>
  );
};

export default Answer;
