
import './App.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from './img/6228df0a7534e96af7ee1ead_Rusk-Logo.png';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from "react-router-dom";


function Login() {

    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const toastSuccess = () => toast.success('Success');
    const toastWarn = () => toast.warn('Please Enter Username');
    const toastWarn1 = () => toast.warn('Please Enter Password');
    const toastError = () => toast.error('Please Enter valid username');
    const toastError1 = () => toast.error('Please Enter valid credentials');
    const toastError2 = () => toast.error('Login Failed');

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            // usenavigate('/dashboard')
            ///implentation
            console.log(username);
            fetch("http://localhost:4000/user/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    // toast.error('Please Enter valid username');
                    toastError();
                } else {
                    if (resp.password === password) {
                        // toast.success('Success');
                        toastSuccess();
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('userrole', resp.role);
                        usenavigate('/dashboard')
                    } else {
                        // toast.error('Please Enter valid credentials');
                        toastError1();
                    }
                }
            }).catch((err) => {
                // toast.error('Login Failed due to :' + err.message);
                toastError2();
            });
        }
    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            // toast.warning('Please Enter Username');
            toastWarn();
        }
        if (password === '' || password === null) {
            result = false;
            // toast.warning('Please Enter Password');
            toastWarn1();
        }
        return result;
    }

    return (
        <div >
            <Row className='h-100'>
                <Col style={{ backgroundColor: "#27274b" }} className="center-image">
                    <img src={img} style={{ width: "100px", height: "100px" }} />
                </Col>
                <Col style={{ backgroundColor: "black" }}>
                    <section className='login-wrapper '>
                        <Form.Group className='login-height'>
                            <Form.Group className='mb-4 mb-md-5 text-center sa-logo'>

                            </Form.Group>
                            <Form className=' text-white d-flex justify-content-center align-items-center' onSubmit={ProceedLogin}>
                                <Form.Group className='login-block'>
                                    <Form.Group className=''>
                                        <h2 className=" mb-5 ">Playverse Admin Panel</h2>
                                    </Form.Group>

                                    <Form.Group className='form-group font-weight-light'>
                                        <Form.Label  >
                                            EMAIL ADDRESS
                                        </Form.Label>
                                        <Form.Control
                                            type='text'
                                            className='form-control default-form'
                                            placeholder='Enter email...'
                                            value={username} onChange={e => usernameupdate(e.target.value)}
                                        />

                                    </Form.Group>

                                    <Form.Group className='form-group font-weight-light'>
                                        <Form.Label >
                                            PASSWORD
                                            <Form.Group className='tooltip-block'>
                                            </Form.Group>
                                        </Form.Label>
                                        <Form.Group className='pwd-form'>
                                            <Form.Control
                                                type="password"
                                                className='form-control default-form'
                                                placeholder='Enter password...'
                                                value={password} onChange={e => passwordupdate(e.target.value)}
                                            />

                                        </Form.Group>

                                    </Form.Group>


                                    <Button type='submit' className='btn outline-btn m-4' style={{ backgroundColor: '#4784c5', width: '100px' }} >
                                        LOGIN
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Form.Group>
                    </section>

                </Col>
            </Row>
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
            />
        </div>
    );
}

export default Login;
