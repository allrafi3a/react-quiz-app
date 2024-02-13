import React from 'react'
import clesses from '../../styles/Login.module.css'
import Button from '../Button'
import Form from '../Form'
import Illustration from '../Illustration'
import Textinput from '../Textinput'

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${clesses.login}`}>
                    <Textinput type="text" placeholder="Enter email" icon="alternate_email" />
                    <Textinput type="password" placeholder="Enter password" icon="lock" />

                    <Button>
                        <span>Submit now</span>
                    </Button>

                    <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>
                </Form>
            </div>
        </>
    )
}
