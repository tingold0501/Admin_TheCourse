// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
function Login() {
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

    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");

    const checkLoginAdmin = () => {
        if (email == "") {
            toast('🦄 Admin Email Null!', {
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
        else if (password == "") {
            toast('🦄 Admin Password Null!', {
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
                url: urlApi + 'checkLoginAdmin',
                data: {
                    email: email,
                    password: password
                }
            }).then((res) => {
                console.log(res.data);
                if (res.data.check == true) {
                    toast.success('🦄 Login Success!', {
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
    return (
        <div>
            <ToastContainer />
            <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
                <section className="flex w-[30rem] flex-col space-y-10">
                    <div className="text-center text-4xl font-medium">Log In</div>
                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input onChange={e => (setEmail(e.target.value))} type="text" placeholder="Email or Username" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                    </div>
                    <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input onChange={e => (setPassWord(e.target.value))} type="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
                    </div>
                    <button onClick={checkLoginAdmin} className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                        LOG IN
                    </button>
                    <a href="#" className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>
                    <p className="text-center text-lg">
                        No account?
                        <a href="#" className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Login