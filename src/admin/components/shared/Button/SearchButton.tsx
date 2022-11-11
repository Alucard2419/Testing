import React from "react";

const SearchButton = () => {
    return (
        <>
            <span className="input-wrapper max-w-md md:w-52 md:mb-0 mb-4">
                <div className="input-suffix-start">
                    <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-lg"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                </div>
                <input style={{paddingLeft: "2.125rem"}}
                       className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                       type="text" placeholder="Search product"/>
            </span>
        </>
    )
}

export default SearchButton;
