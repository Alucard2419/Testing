import React from "react";



const productTable = () => {


    return(
        <>
            <div className="card h-full border-0 card-border">
                <div className="card-body card-gutterless h-full">
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="table-default table-hover" role="table">
                                <thead className="">
                                <tr className="" role="row">
                                    <th className="" colSpan={1} role="columnheader">
                                        <div className="cursor-pointer">Name<span><div className="inline-flex"><svg
                                            stroke="currentColor" fill="currentColor" strokeWidth="0"
                                            viewBox="0 0 320 512" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path
                                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg></div></span>
                                        </div>
                                    </th>
                                    <th className="" colSpan={1} role="columnheader">
                                        <div className="cursor-pointer">Category<span><div
                                            className="inline-flex"><svg stroke="currentColor"
                                                                         fill="currentColor" strokeWidth="0"
                                                                         viewBox="0 0 320 512" height="1em"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg></div></span>
                                        </div>
                                    </th>
                                    <th className="" colSpan={1} role="columnheader">
                                        <div className="cursor-pointer">Quantity<span><div
                                            className="inline-flex"><svg stroke="currentColor"
                                                                         fill="currentColor" strokeWidth="0"
                                                                         viewBox="0 0 320 512" height="1em"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg></div></span>
                                        </div>
                                    </th>
                                    <th className="" colSpan={1} role="columnheader">
                                        <div className="cursor-pointer">Status<span><div
                                            className="inline-flex"><svg stroke="currentColor"
                                                                         fill="currentColor" strokeWidth="0"
                                                                         viewBox="0 0 320 512" height="1em"
                                                                         width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg></div></span>
                                        </div>
                                    </th>
                                    <th className="" colSpan={1} role="columnheader">
                                        <div className="cursor-pointer">Price<span><div className="inline-flex"><svg
                                            stroke="currentColor" fill="currentColor" strokeWidth="0"
                                            viewBox="0 0 320 512" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path
                                            d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg></div></span>
                                        </div>
                                    </th>
                                    <th className="" colSpan={1} role="columnheader"></th>
                                </tr>
                                </thead>
                                <tbody className="" role="rowgroup">
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-1.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Luminaire Giotto Headphones</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">devices</span>
                                    </td>
                                    <td className="" role="cell">46</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$252</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-2.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">White Backpack</span></div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">bags</span></td>
                                    <td className="" role="cell">28</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$139</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-3.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Black Sneaker</span></div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">shoes</span></td>
                                    <td className="" role="cell">52</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$99</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-4.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Gray Hoodies</span></div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">cloths</span></td>
                                    <td className="" role="cell">92</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$68</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-5.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Blue Backpack</span></div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">bags</span></td>
                                    <td className="" role="cell">0</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-red-500"></span><span
                                            className="capitalize font-semibold text-red-500">Out of Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$70</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-6.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">White Sneaker</span></div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">shoes</span></td>
                                    <td className="" role="cell">18</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$29</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-7.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Strip Analog Watch</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">watches</span>
                                    </td>
                                    <td className="" role="cell">7</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-amber-500"></span><span
                                            className="capitalize font-semibold text-amber-500">Limited</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$389</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-8.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Beats Solo Headphone</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">devices</span>
                                    </td>
                                    <td className="" role="cell">0</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-red-500"></span><span
                                            className="capitalize font-semibold text-red-500">Out of Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$869</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-9.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Apple Macbook Pro</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">devices</span>
                                    </td>
                                    <td className="" role="cell">27</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-emerald-500"></span><span
                                            className="capitalize font-semibold text-emerald-500">In Stock</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$1599</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="" role="row">
                                    <td className="" role="cell">
                                        <div className="flex items-center"><span
                                            className="avatar avatar-rounded avatar-md"><img
                                            className="avatar-img avatar-rounded"
                                            src="/img/products/product-10.jpg" loading="lazy"/></span><span
                                            className="ml-2 rtl:mr-2 font-semibold">Bronze Analog Watch</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span className="capitalize">watches</span>
                                    </td>
                                    <td className="" role="cell">6</td>
                                    <td className="" role="cell">
                                        <div className="flex items-center gap-2"><span
                                            className="badge-dot bg-amber-500"></span><span
                                            className="capitalize font-semibold text-amber-500">Limited</span>
                                        </div>
                                    </td>
                                    <td className="" role="cell"><span>$729</span></td>
                                    <td className="" role="cell">
                                        <div className="flex justify-end text-lg"><span
                                            className="cursor-pointer p-2 hover:text-indigo-600"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span><span
                                            className="cursor-pointer p-2 hover:text-red-500"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0"
                                            viewBox="0 0 24 24" height="1em" width="1em"
                                            xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"
                                                                                     strokeLinejoin="round"
                                                                                     strokeWidth="2"
                                                                                     d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="pagination"><span
                                className="pagination-pager pagination-pager-prev pagination-pager-disabled"><svg
                                stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"></path></svg></span>
                                <ul>
                                    <li className="pagination-pager text-indigo-600 bg-indigo-50 hover:bg-indigo-50 dark:bg-indigo-600 dark:text-gray-100"
                                        tabIndex={0}>1
                                    </li>
                                    <li className="pagination-pager pagination-pager-inactive" tabIndex={0}>2
                                    </li>
                                </ul>
                                <span
                                    className="pagination-pager pagination-pager-next pagination-pager-inactive"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 20 20" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                             d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                             clipRule="evenodd"></path></svg></span>
                            </div>
                            <div style={{minWidth: "130px"}}>
                                <div className="select select-sm css-2b097c-container"><span aria-live="polite"
                                                                                             aria-atomic="false"
                                                                                             aria-relevant="additions text"
                                                                                             className="css-1f43avz-a11yText-A11yText"></span>
                                    <div className="select__control css-3l2jeo-control">
                                        <div
                                            className="select__value-container select__value-container--has-value css-g1d714-ValueContainer">
                                            <div className="select__single-value css-lp1bcl-singleValue">10 /
                                                page
                                            </div>
                                            <input id="react-select-11-input" readOnly={false} tabIndex={0}
                                                   aria-autocomplete="list"
                                                   className="css-wmatm6-dummyInput-DummyInput" /></div>
                                        <div className="select__indicators css-1hb7zxy-IndicatorsContainer">
                                            <div className="select-dropdown-indicator">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 20 20" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                          clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const TableHead = () => {
    return(
        <>
            <div className="lg:flex items-center justify-between mb-4">
                <h3 className="mb-4 lg:mb-0">Products</h3>
                <div className="flex flex-col lg:flex-row lg:items-center">
                            <span className="input-wrapper max-w-md md:w-52 md:mb-0 mb-4">
                                <div className="input-suffix-start">
                                    <svg stroke="currentColor"
                                         fill="none"
                                         strokeWidth="0" viewBox="0 0 24 24"
                                         className="text-lg" height="1em" width="1em"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </div>
                                <input style={{paddingLeft: "2.125rem"}} className="input input-sm h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600" type="text" placeholder="Search product"/></span>
                    <button className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm block md:inline-block ltr:md:ml-2 rtl:md:mr-2 md:mb-0 mb-4">
                                        <span className="flex items-center justify-center"><span className="text-lg"><svg
                                            stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24"
                                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg></span><span
                                            className="ltr:ml-1 rtl:mr-1">Filter</span></span></button>
                    <a className="block lg:inline-block md:mx-2 md:mb-0 mb-4" download=""
                       href="/data/product-list.csv" target="_blank">
                        <button
                            className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm w-full">
                                            <span className="flex items-center justify-center"><span
                                                className="text-lg"><svg stroke="currentColor" fill="currentColor"
                                                                         strokeWidth="0" viewBox="0 0 20 20"
                                                                         height="1em" width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                fillRule="evenodd"
                                                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path></svg></span><span
                                                className="ltr:ml-1 rtl:mr-1">Export</span></span></button>
                    </a><a className="block lg:inline-block md:mb-0 mb-4" href="/app/sales/product-new">
                    <button
                        className="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm w-full">
                                            <span className="flex items-center justify-center"><span
                                                className="text-lg"><svg stroke="currentColor" fill="currentColor"
                                                                         strokeWidth="0" viewBox="0 0 20 20"
                                                                         height="1em" width="1em"
                                                                         xmlns="http://www.w3.org/2000/svg"><path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                clipRule="evenodd"></path></svg></span><span
                                                className="ltr:ml-1 rtl:mr-1">Add Product</span></span></button>
                </a></div>
            </div>
        </>
    )
}
