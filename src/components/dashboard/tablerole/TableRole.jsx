/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
{/* <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="text-gray-500">
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">30%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-cyan-600 h-2 rounded-sm" style={{ width: '30%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-500">
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">24%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-orange-300 h-2 rounded-sm" style={{ width: '24%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-500">
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">18%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-teal-400 h-2 rounded-sm" style={{ width: '18%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-500">
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">12%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-pink-600 h-2 rounded-sm" style={{ width: '12%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-500">
                                <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">9%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-indigo-600 h-2 rounded-sm" style={{ width: '9%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="text-gray-500">
                                <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                    <div className="flex items-center">
                                        <span className="mr-2 text-xs font-medium">7%</span>
                                        <div className="relative w-full">
                                            <div className="w-full bg-gray-200 rounded-sm h-2">
                                                <div className="bg-purple-500 h-2 rounded-sm" style={{ width: '7%' }} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}
function TableRole() {
    const urlApi = 'http://127.0.0.1:8000/api/';
    const [roles, setRoles] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    useEffect(() => {
        fetch(urlApi + "getDataRole?page=" + page)
            .then((res) => res.json())
            .then((res) => {
                setRoles(res.data);
                var arr = [];
                if (res.last_page > 1) {
                    for (let i = 1; i < res.last_page + 1; i++) {
                        arr.push(i);
                    }
                    setPagination(arr);
                }
            });
    }, [page]);
    return (
        <div>
            <ToastContainer />
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900">Role Table</h3>
                    <Link to='/roledashboard'>
                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                    </Link>
                </div>
                <div className="flow-root">
                    {roles.length > 0 ? (
                        <ul role="list" className="divide-y divide-gray-200">
                            {roles.map((item, index) => (
                                <li key={index} className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            {/* <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image" /> */}
                                            <p>{++index}</p>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {item.name}
                                            </p>
                                            {/* <p className="text-sm text-gray-500 truncate">
                                                <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&nbsp;protected]</a>
                                            </p> */}
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                            <select defaultValue={item.status} className='form-control border-none'>
                                                <option value={1}> Opening</option>
                                                <option value={0}> Closing</option>
                                            </select>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    )
}

export default TableRole