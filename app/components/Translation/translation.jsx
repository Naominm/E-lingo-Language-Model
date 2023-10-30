import React from 'react';

function Translation() {
  const containerStyle = "w-90 h-10 py-3 px-10 text-orange font-bold border border-solid border-orange border-1 bg-white rounded-full";
  const textStyle = "text-[#FF5F1F]";

  return (
    <div className="w-full h-full bg-white">
      <div className="pt-20">
        <h1 className="flex justify-center items-center text-3xl font-bold leading-relaxed text-[#FF5F1F]">Translate From:</h1>
      </div>
      <div className="pt-10 flex flex-row justify-center space-between">
        <div className={`${containerStyle} ml-5 w-30`}>
          < span className={`flex items-center ${textStyle}`}>English</span>
          < span className="ml-2 text-[#FF5F1F]">
            {/* Add your dropdown icon here */}
            < svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF5F1F" className="bi bi-caret-downm 2x" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 9.293l-3.354-3.353a1 1 0 011.415-1.414L8 6.293l2.939-2.94a1 1 0 111.414 1.414L8 9.293z" />
            </svg>
          </span>
        </div>
        <div className={`${containerStyle} ml-15 w-30`}>
          <span className={`flex items-center ${textStyle}`}>Kikuyu</span>
          <span className="ml-2 text-[#FF5F1F]">
            {/* Add your dropdown icon here */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF5F1F" className="bi bi-caret-down 2x" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 9.293l-3.354-3.353a1 1 0 011.415-1.414L8 6.293l2.939-2.94a1 1 0 111.414 1.414L8 9.293z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Translation;
