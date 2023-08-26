import React, { Fragment, useState } from 'react';

const Panel: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((count) => count + 1);
  return (
    <Fragment>
      <div className="flex justify-center">
        <a href="" target="_blank">
          <img className="w-20 sm:w-32" src="/../images/icon-128.png" alt="Vite logo" />
        </a>
      </div>
      <h1 className="text-white text-2xl font-bold sm:text-5xl">
        Chrome Extension <br /> Boilerplate
      </h1>
      <div className="flex flex-col items-center gap-3 sm:gap-5">
        <button
          className="px-3 py-2 text-white bg-[#1a1a1a] sm:text-base font-semibold rounded-lg"
          onClick={increment}
        >
          count is {count}
        </button>
        <p className="px-2 py-1 font-normal text-white sm:text-base">
          Edit <code>src/pages/panel/panel.tsx</code>
        </p>
      </div>
    </Fragment>
  );
};

export default Panel;
