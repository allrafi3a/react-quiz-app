import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import Textinput from './Textinput';

export default function SignupForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [agree, setAgree] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { signup } = useAuth()
    const history = useNavigate();

    async function hendleSumit(e) {
        e.preventDefault();
        //do validation
        if (password !== confirmPassword) {
            return setError("Password dont't match!!");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            history('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError("Failed to create account");
        }

    }

    return (
        <Form style={{ height: '500px' }} onSubmit={hendleSumit}>
            <Textinput required type="text" placeholder="Enter name" icon="person" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Textinput required type="email" placeholder="Enter email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Textinput required type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Textinput required type="password" placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <Checkbox required text=" I agree to the Terms & Conditions" value={agree} onChange={(e) => setAgree(e.target.value)} />
            <Button disabled={loading} type="submit ">
                <span>Submit now</span>
            </Button>

            {error && <p className='error'>{error}</p>}

            <div className="info">
                Already have an account? <Link to="login">Login</Link> instead.
            </div>
        </Form>
    )
}
