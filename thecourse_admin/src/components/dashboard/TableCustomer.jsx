// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function TableCustomer() {
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const urlApi = 'http://127.0.0.1:8000/api/';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addUser = () => {
        if (name == "") {
            toast.error('🦄 Name User Null!', {
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
        else if(email == ""){
            toast.error('🦄 Email User Null!', {
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
        else{
            axios({
                method: 'post',
                url: urlApi + 'checkLoginAdmin',
                data: {
                    name: name,
                    email: email
                }
            }).then((res)=>{
                console.log(res.data);
            })
        }
    }

    return (
        <div>
            <ToastContainer/>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input onChange={e=>setName(e.target.value)} type="text" placeholder='Enter Name User..' className='form-control' />
                    <input onChange={e=>setEmail(e.target.value)} type="email" placeholder='Enter Email User..' className='form-control mt-2' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className='bg-gray-700' onClick={handleClose}>
                        Close
                    </Button>
                    <Button onClick ={addUser} variant="primary" className='bg-blue-400'>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
                    {/* <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                        View all
                    </a> */}
                    <Button variant="primary" className='bg-blue-500' onClick={handleShow}>
                        Add User
                    </Button>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 truncate">
                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&nbsp;protected]</a>
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                    $320
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TableCustomer