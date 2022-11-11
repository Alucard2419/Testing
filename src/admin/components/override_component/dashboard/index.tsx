import React, {useEffect, useState} from 'react';
import {ApiClient, useTranslation} from "adminjs";
import Card from "../../ui/Card";
import Menu from "../../ui/Menu";

const api = new ApiClient();



const Dashboard = () => {

    const {translateMessage} = useTranslation()

    const [data, setData] = useState({})
    useEffect(() => {
        api.getDashboard().then((response) => {
            setData(response.data);
        });
    }, [])


    return(

        <>
            <div className="h-full flex flex-auto flex-col justify-between">
                <main className="h-full">
                    <div className="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
                        <div className="flex flex-col gap-4 h-full">
                            <div>
                                {/* Dynamic Content here */}
                                <h4 className="mb-1 font-bold">Hello, Osmel Martinez</h4>
                                <p>You have 5 tasks on hand.</p>
                            </div>

                            <div>
                                <div>
                                    <Card>
                                        <h5 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>Card title</h5>
                                        <p>
                                            Some quick example text to build on the card title and
                                            make up the bulk of the card's content.
                                        </p>
                                    </Card>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row gap-4">
                                <div className="flex flex-col gap-4 flex-auto">
                                    <div className="card card-border">
                                        <div className="card-body">
                                            <div
                                                className="flex sm:flex-row flex-col md:items-center justify-between mb-6 gap-4">
                                                <h4>Task Overview</h4>
                                                <div className="segment">
                                                    <button
                                                        className="segment-item segment-item-default h-9 px-3 py-2 text-sm">Monthly
                                                    </button>
                                                    <button
                                                        className="segment-item segment-item-default segment-item-active h-9 px-3 py-2 text-sm">Weekly
                                                    </button>
                                                    <button
                                                        className="segment-item segment-item-default h-9 px-3 py-2 text-sm">Daily
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <div className="flex gap-2">
                                                        <div><h5 className="font-bold">213</h5><p>Total Tasks</p></div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-x-6">
                                                    <div className="flex gap-2"><span
                                                        className="badge-dot bg-indigo-600 mt-2.5"></span>
                                                        <div><h5 className="font-bold">126</h5><p>On Going</p></div>
                                                    </div>
                                                    <div className="flex gap-2"><span
                                                        className="badge-dot bg-emerald-500 mt-2.5"></span>
                                                        <div><h5 className="font-bold">87</h5><p>Finished</p></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className=""></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="xl:w-[380px]">
                                        <div className="card mb-4 card-border">
                                            <div className="card-body">
                                                <div className="mx-auto max-w-[420px]">

                                                </div>
                                                <div className="my-6"><h5 className="mb-4">Schedule</h5>
                                                    <div
                                                        className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-indigo-600 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500/20">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     strokeWidth="0" viewBox="0 0 20 20" height="1em"
                                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                                                </svg>
                                                            </div>
                                                            <div><h6 className="text-sm font-bold">Sprint Planning</h6>
                                                                <p>via Zoom</p></div>
                                                        </div>
                                                        <span>10:00am</span></div>
                                                    <div
                                                        className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-indigo-600 bg-indigo-100 dark:text-indigo-100 dark:bg-indigo-500/20">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     strokeWidth="0" viewBox="0 0 20 20" height="1em"
                                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                                                </svg>
                                                            </div>
                                                            <div><h6 className="text-sm font-bold">Design
                                                                discussion</h6><p>via Microsoft Teams</p></div>
                                                        </div>
                                                        <span>1:00pm</span></div>
                                                    <div
                                                        className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="rounded-lg h-10 w-10 text-lg flex items-center justify-center bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-100">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     strokeWidth="0" viewBox="0 0 20 20" height="1em"
                                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd"
                                                                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                                          clipRule="evenodd"></path>
                                                                </svg>
                                                            </div>
                                                            <div><h6 className="text-sm font-bold">Create daily
                                                                report</h6><p>Daily task</p></div>
                                                        </div>
                                                        <span>3:00pm</span></div>
                                                    <div
                                                        className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-600/40 cursor-pointer user-select">
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     strokeWidth="0" viewBox="0 0 20 20" height="1em"
                                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                                                                    <path
                                                                        d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                                                                </svg>
                                                            </div>
                                                            <div><h6 className="text-sm font-bold">MySql online
                                                                workshop</h6><p>Online workshop</p></div>
                                                        </div>
                                                        <span>4:00pm</span></div>
                                            </div>
                                        </div>
                                        <div className="card card-border">
                                            <div className="card-body">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h4>Activitiess</h4>
                                                    <button
                                                        className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">View
                                                        All
                                                    </button>
                                                </div>
                                                <div className="mt-6">
                                                    <ul className="timeline">
                                                        <li className="timeline-item">
                                                            <div className="timeline-item-wrapper">
                                                                <div className="timeline-item-media">
                                                                    <div className="timeline-item-media-content"><span
                                                                        className="avatar avatar-circle bg-teal-500 dark:bg-teal-500"
                                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                                    ><span
                                                                        className="avatar-string "
                                                                        // style="line-height: 30px; transform: translateX(-50%) scale(1); height: 30px;"
                                                                    >CP</span></span>
                                                                    </div>
                                                                    <div className="timeline-connect"></div>
                                                                </div>
                                                                <div className="timeline-item-content">
                                                                    <div className="flex flex-col gap-y-0.5"><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">Carolyn Perkins</span><span
                                                                        className="text-xs">10:20 AM</span></div>
                                                                    <div className="mt-4"><span className="mx-1">has change </span><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">PD-979</span><span
                                                                        className="mx-1"> status to </span><span
                                                                        className="badge-dot bg-emerald-500"></span><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100 ml-1 rtl:mr-1">Completed</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="timeline-item">
                                                            <div className="timeline-item-wrapper">
                                                                <div className="timeline-item-media">
                                                                    <div className="timeline-item-media-content"><span
                                                                        className="avatar avatar-circle"
                                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                                    ><img
                                                                        className="avatar-img avatar-circle"
                                                                        src="#"
                                                                        loading="lazy"/></span></div>
                                                                    <div className="timeline-connect"></div>
                                                                </div>
                                                                <div className="timeline-item-content">
                                                                    <div className="flex flex-col gap-y-0.5"><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">Ron Vargas</span><span
                                                                        className="text-xs">09:53 AM</span></div>
                                                                    <div className="mt-4"><span className="mx-1">comment on your</span><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">Post</span>
                                                                    </div>
                                                                    <div className="card mt-4 card-border">
                                                                        <div className="card-body">Fine, Java MIGHT be a
                                                                            good example of what a programming language
                                                                            should be like. But Java applications are
                                                                            good examples of what applications SHOULDN'T
                                                                            be like.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="timeline-item">
                                                            <div className="timeline-item-wrapper">
                                                                <div className="timeline-item-media">
                                                                    <div className="timeline-item-media-content"><span
                                                                        className="avatar avatar-circle text-gray-700 bg-gray-200 dark:text-gray-100 dark:text-gray-100"
                                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 15px;"
                                                                    ><span
                                                                        className="avatar-icon avatar-icon-30"><svg
                                                                        stroke="currentColor" fill="currentColor"
                                                                        strokeWidth="0" viewBox="0 0 20 20"
                                                                        height="1em" width="1em"
                                                                        xmlns="http://www.w3.org/2000/svg"><path
                                                                        fillRule="evenodd"
                                                                        d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                                                                        clipRule="evenodd"></path></svg></span></span>
                                                                    </div>
                                                                    <div className="timeline-connect"></div>
                                                                </div>
                                                                <div className="timeline-item-content">
                                                                    <div className="flex flex-col gap-y-0.5"><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">Joyce Freeman</span><span
                                                                        className="text-xs">08:40 AM</span></div>
                                                                    <div className="mt-4"><span className="mx-1">added tags </span>
                                                                        <div className="tag mx-1"><span
                                                                            className="tag-affix tag-prefix bg-rose-500"></span>Live
                                                                            Issue
                                                                        </div>
                                                                        <div className="tag mx-1"><span
                                                                            className="tag-affix tag-prefix bg-blue-500"></span>Backend
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="timeline-item timeline-item-last">
                                                            <div className="timeline-item-wrapper">
                                                                <div className="timeline-item-media">
                                                                    <div className="timeline-item-media-content"><span
                                                                        className="avatar avatar-circle text-gray-700 bg-gray-200 dark:text-gray-100 dark:text-gray-100"
                                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 15px;"
                                                                    ><span
                                                                        className="avatar-icon avatar-icon-30"><svg
                                                                        stroke="currentColor" fill="currentColor"
                                                                        strokeWidth="0" viewBox="0 0 20 20"
                                                                        height="1em" width="1em"
                                                                        xmlns="http://www.w3.org/2000/svg"><path
                                                                        fillRule="evenodd"
                                                                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                                                                        clipRule="evenodd"></path></svg></span></span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="timeline-item-content timeline-item-content-last">
                                                                    <div className="flex flex-col gap-y-0.5"><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">Luke Cook</span><span
                                                                        className="text-xs">07:18 AM</span></div>
                                                                    <div className="mt-4"><span
                                                                        className="mx-1">added</span><span
                                                                        className="font-semibold text-gray-900 dark:text-gray-100">document.csv</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-border">
                                <div className="card-body">
                                    <div className="flex items-center justify-between mb-6"><h4>My Tasks</h4>
                                        <button
                                            className="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm">View
                                            All
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="table-default table-hover table-compact" role="table">
                                            <thead className="">
                                            <tr className="" role="row">
                                                <th className="" colSpan={1} role="columnheader">Task ID</th>
                                                <th className="" colSpan={1} role="columnheader">Subject</th>
                                                <th className="" colSpan={1} role="columnheader">Priority</th>
                                                <th className="" colSpan={1} role="columnheader">Assignees</th>
                                            </tr>
                                            </thead>
                                            <tbody className="" role="rowgroup">
                                            <tr className="" role="row">
                                                <td className="" role="cell"><a
                                                    className="hover:underline font-semibold"
                                                    href="/app/project/scrum-board">KCM-1393</a></td>
                                                <td className="" role="cell">Design sign up flow</td>
                                                <td className="" role="cell">
                                                    <div
                                                        className="tag text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">High
                                                    </div>
                                                </td>
                                                <td className="" role="cell">
                                                    <div className="avatar-group avatar-group-chained"><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#"
                                                        loading="lazy"/></span></span><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="" loading="lazy"/></span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="" role="row">
                                                <td className="" role="cell"><a
                                                    className="hover:underline font-semibold"
                                                    href="/app/project/scrum-board">KCM-2039</a></td>
                                                <td className="" role="cell">Update contact page</td>
                                                <td className="" role="cell">
                                                    <div
                                                        className="tag text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0">Medium
                                                    </div>
                                                </td>
                                                <td className="" role="cell">
                                                    <div className="avatar-group avatar-group-chained"><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#" loading="lazy"/></span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="" role="row">
                                                <td className="" role="cell"><a
                                                    className="hover:underline font-semibold"
                                                    href="/app/project/scrum-board">KCM-2155</a></td>
                                                <td className="" role="cell">Document features 2.0</td>
                                                <td className="" role="cell">
                                                    <div
                                                        className="tag text-amber-600 bg-amber-100 dark:text-amber-100 dark:bg-amber-500/20 rounded border-0">Medium
                                                    </div>
                                                </td>
                                                <td className="" role="cell">
                                                    <div className="avatar-group avatar-group-chained"><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#"
                                                        loading="lazy"/></span></span><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#"
                                                        loading="lazy"/></span></span><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#" loading="lazy"/></span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="" role="row">
                                                <td className="" role="cell"><a
                                                    className="hover:underline font-semibold"
                                                    href="/app/project/scrum-board">KCM-2270</a></td>
                                                <td className="" role="cell">Fix typo in home page</td>
                                                <td className="" role="cell">
                                                    <div
                                                        className="tag bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-100 rounded border-0">Low
                                                    </div>
                                                </td>
                                                <td className="" role="cell">
                                                    <div className="avatar-group avatar-group-chained"><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#"
                                                        loading="lazy"/></span></span><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#" loading="lazy"/></span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="" role="row">
                                                <td className="" role="cell"><a
                                                    className="hover:underline font-semibold"
                                                    href="/app/project/scrum-board">KCM-1957</a></td>
                                                <td className="" role="cell">Fix broken API</td>
                                                <td className="" role="cell">
                                                    <div
                                                        className="tag text-red-600 bg-red-100 dark:text-red-100 dark:bg-red-500/20 rounded border-0">High
                                                    </div>
                                                </td>
                                                <td className="" role="cell">
                                                    <div className="avatar-group avatar-group-chained"><span
                                                        className="tooltip-wrapper"><span
                                                        className="avatar avatar-circle  cursor-pointer"
                                                        // style="width: 30px; height: 30px; min-width: 30px; line-height: 30px; font-size: 12px;"
                                                    ><img
                                                        className="avatar-img avatar-circle"
                                                        src="#" loading="lazy"/></span></span>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}


export default Dashboard;
