import React from "react";
import { RiCalendarTodoFill, RiTodoLine } from "react-icons/ri";
import { AiOutlineBell, AiOutlineClockCircle } from "react-icons/ai";

const Features = () => {
  return (
    <div>
      <ul className="text-gray-500 font-semibold space-y-2 mt-2 text-start text-sm sm:space-y-1  sm:text-center sm:absolute sm:w-24 sm:h-28 sm:mt-4 sm:shadow-lg rounded sm:shadow-black sm:bg-white sm:top-10 sm:pt-4 ">
        <li className="flex items-center">
          <RiTodoLine className="text-blue-300" /> Todo List
        </li>
        <li className="flex items-center">
          <RiCalendarTodoFill className="text-green-300" />
          Calendar
        </li>
        <li className="flex items-center">
          <AiOutlineBell className="text-yellow-300" />
          Reminders
        </li>
        <li className="flex items-center">
          <AiOutlineClockCircle className="text-red-300" />
          Planning
        </li>
      </ul>
    </div>
  );
};

export default Features;
