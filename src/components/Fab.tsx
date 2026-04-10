import React, { useState } from 'react';

const Fab = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-colors relative text-3xl"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ⬆️
        {show && (
          <span className="absolute right-20 bg-[#17203a] text-blue-100 px-4 py-2 rounded shadow text-lg whitespace-nowrap">
            Scroll to top
          </span>
        )}
      </button>
    </div>
  );
};

export default Fab;
