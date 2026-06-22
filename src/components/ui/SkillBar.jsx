"use client";

import { useEffect, useState } from "react";

export default function SkillBar({ title, value }) {

  const [progress, setProgress] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {

    // انیمیشن نوار
    setTimeout(() => {
      setProgress(value);
    }, 200);

    // انیمیشن عدد
    let start = 0;

    const interval = setInterval(() => {

      start += 1;

      if (start >= value) {
        start = value;
        clearInterval(interval);
      }

      setCount(start);

    }, 20);

    return () => clearInterval(interval);

  }, [value]);

  return (

    <div className="mb-4 w-xl ">

      <div className="flex justify-between mb-2">

        <span>{title}</span>

        <span className="text-[#f8fafc]">
          {count}%
        </span>

      </div>

      <div className="
        w-full
        h-2
        rounded-full
        bg-[#1d1d1d]
        overflow-hidden
      ">

        <div
          className="
            h-full
            rounded-full
            bg-[linear-gradient(to_left,#17abf7,#0055e2)]
            transition-all
            duration-[2000ms]
            ease-out
          "
          style={{
            width: `${progress}%`
          }}
        />

      </div>

    </div>

  );

}