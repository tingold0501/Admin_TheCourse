// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../components/dashboard/Header'
import SideBar from '../components/dashboard/SideBar'
import TableCustomer from '../components/dashboard/TableCustomer'
import TableRole from '../components/dashboard/tableuser/TableRole'

function Dashboard() {
    return (
        <div>
            {/* component */}
            {/* This is an example component */}
            <div>
               {/* Header */}
               <Header/>
                <div className="flex overflow-hidden bg-white pt-16">
                    {/* Side Bar */}
                    <SideBar/>
                    <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop" />
                    <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                        <main>
                            <div className="pt-6 px-4">
                                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex-shrink-0">
                                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                                                <h3 className="text-base font-normal text-gray-500">Sales this week</h3>
                                            </div>
                                            <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                                12.5%
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div id="main-chart" />
                                    </div>
                                    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
                                                <span className="text-base font-normal text-gray-500">This is a list of latest transactions</span>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</a>
                                            </div>
                                        </div>
                                        <div className="flex flex-col mt-8">
                                            <div className="overflow-x-auto rounded-lg">
                                                <div className="align-middle inline-block min-w-full">
                                                    <div className="shadow overflow-hidden sm:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-200">
                                                            <thead className="bg-gray-50">
                                                                <tr>
                                                                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Transaction
                                                                    </th>
                                                                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Date &amp; Time
                                                                    </th>
                                                                    <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                        Amount
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white">
                                                                <tr>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                        Payment from <span className="font-semibold">Bonnie Green</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 23 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $2300
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                        Payment refund to <span className="font-semibold">#00910</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 23 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        -$670
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                        Payment failed from <span className="font-semibold">#087651</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 18 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $234
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                        Payment from <span className="font-semibold">Lana Byrd</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 15 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $5000
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                        Payment from <span className="font-semibold">Jese Leos</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 15 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $2300
                                                                    </td>
                                                                </tr>
                                                                <tr className="bg-gray-50">
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                        Payment from <span className="font-semibold">THEMESBERG LLC</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 11 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $560
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                        Payment from <span className="font-semibold">Lana Lysle</span>
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                        Apr 6 ,2021
                                                                    </td>
                                                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                        $1437
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
                             
                                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                                  {/* Table Customer */}
                                  <TableCustomer/>
                                  <TableRole/>
                                </div>
                            </div>
                            {/* Report Item */}
                        </main>
                    
                        <p className="text-center text-sm text-gray-500 my-10">
                           Coppy Right © <a href="#" className="hover:underline" target="_blank">By</a>. Phạm Huỳnh Tín 2023
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard