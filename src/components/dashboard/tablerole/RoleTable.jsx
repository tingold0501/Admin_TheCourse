/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function RoleTable() {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />

    const urlApi = 'http://127.0.0.1:8000/api/';
    const [rolesTable, setRolesTable] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [roleName, setRoleName] = useState("");

    const addRole = () => {
        if (roleName == "") {
            toast.error('🦄 Role Name Null!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            axios({
                method: 'post',
                url: urlApi + 'addRole',
                data: {
                    roleName: roleName,
                }
            }).then((res) => {
                console.log(res);
                if (res.data.check == true) {
                    toast.success('🦄' + res.data.msg, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        window.location.reload();
                    })
                }
                else if (res.data.msg.roleName) {
                    toast.error('🦄' + res.data.msg.roleName, {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
        }
    }

    useEffect(() => {
        fetch(urlApi + "getDataRole?page=" + page)
            .then((res) => res.json())
            .then((res) => {
                setRolesTable(res.data);
                console.log(res.data);
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Role</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={e => setRoleName(e.target.value)} type="text" placeholder='Enter Role Name..' className='form-control' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='bg-gray-700' onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick={addRole} variant="primary" className='bg-blue-400'>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container ml-[15%] ">
                <div className="">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Users</h2>

                    </div>
                    <div className="my-2 flex sm:flex-row flex-col">
                        <div className="block w-full  relative top-10">
                            <span className="h-full absolute inset-y-0 left-0  flex items-center pl-2">
                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                    <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                    </path>
                                </svg>
                                <Button variant="primary" className='bg-blue-500' onClick={handleShow}>
                                    Add Role
                                </Button>
                            </span>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        {rolesTable.length > 0 ? (
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>

                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Created at
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rolesTable.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                            {/* <img className="w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80" alt /> */}
                                                            <p className='mt-2'>{++index}</p>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {item.created_at}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                                                        <select defaultValue={item.status} className='form-control border-none'>
                                                            <option value={0}> Opening</option>
                                                            <option value={1}> Closing</option>
                                                        </select>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="..." className='w-full flex items-center justify-center mt-3 mb-3'>
                                    <ul className="pagination">
                                        {pagination.length > 1 &&
                                            pagination.map((index, item) => (
                                                <li key={index} className="page-item">
                                                    <a
                                                        className={
                                                            item + 1 == page ? "page-link active" : "page-link"
                                                        }
                                                        onClick={(e) => setPage(item)}
                                                        href="#"
                                                    >
                                                        {++item}
                                                    </a>
                                                </li>
                                            ))}
                                    </ul>
                                </nav>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoleTable