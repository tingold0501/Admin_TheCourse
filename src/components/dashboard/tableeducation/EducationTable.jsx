/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function EducationTable() {
    return (
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
            <div className="">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">Education Table</span>
                    </div>
                    <Link to='/educationdashboard'>
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                    </Link>
                </div>
                <div id="main-chart" />
                
            </div>
            <div>
                {/* component */}
                {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/riva-dashboard-tailwind/riva-dashboard.css" /> */}
                <div className="flex flex-wrap -mx-3 mb-5">
                    <div className="w-full max-w-full px-3 mb-6  mx-auto">
                        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                            <div className="relative flex flex-col min-w-0 break-words ">
                               
                                {/* end card header */}
                                {/* card body  */}
                                <div className="flex-auto block py-8 pt-6 px-9">
                                    <div className="">
                                        <table className="w-full my-0 align-middle text-dark ">
                                            <thead className="align-bottom">
                                                <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                                    <th className="pb-3 ">NAME</th>
                                                    <th className="p-3 ">STATUS</th>
                                                    <th className="pb-3 ">CREATED AT</th>
                                                    <th className="pb-3 ">UPDATE AT</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className=" ">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3">
                                                        <span className="text-center align-baseline inline-flex  py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> In Progress </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                                                    </td>
                                                    <td className="">
                                                        <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-dashed last:border-b-0">
                                                    <td className=" ">
                                                        <div className="flex items-center">
                                                            <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                                <img src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt />
                                                            </div>
                                                            <div className="flex flex-col justify-start">
                                                                <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> Social Media API </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-12 ">
                                                        <span className="text-center align-baseline inline-flex  py-3  items-center font-semibold text-[.95rem] leading-none text-warning bg-warning-light rounded-lg"> Postponed </span>
                                                    </td>
                                                    <td className="">
                                                        <span className="font-semibold text-light-inverse text-md/normal">Olivia Cambell</span>
                                                    </td>
                                                    <td className="">
                                                        <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
                                                    </td>
                                                   
                                                </tr>
                                                
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
    )
}

export default EducationTable