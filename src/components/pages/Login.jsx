import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import clesses from '../../styles/Login.module.css';
import Button from '../Button';
import Form from '../Form';
import Illustration from '../Illustration';
import Textinput from '../Textinput';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const history = useNavigate();
    const { login } = useAuth();

    async function hendleSumit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, password);
            history('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to create account");
        }
    }

    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${clesses.login}`} onSubmit={hendleSumit}>
                    <Textinput type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Textinput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button disabled={loading} type="submit ">
                        <span>Submit now</span>
                    </Button>
                    {error && <p className='error'>{error}</p>}
                    <div className="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
                </Form>
            </div>
        </>
    )
}
