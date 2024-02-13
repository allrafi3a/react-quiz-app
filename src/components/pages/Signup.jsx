import React from 'react'
import classes from '../../styles/Signup.module.css'
import Button from '../Button'
import Checkbox from '../Checkbox'
import Form from '../Form'
import Illustration from '../Illustration'
import Textinput from '../Textinput'
export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">

                <Illustration />

                <Form className={`${classes.signup}`}>
                    <Textinput type="text" placeholder="Enter name" icon="person" />
                    <Textinput type="text" placeholder="Enter email" icon="alternate_email" />
                    <Textinput type="password" placeholder="Enter password" icon="lock" />
                    <Textinput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text=" I agree to the Terms & Conditions" />
                    <Button>
                        <span>Submit now</span>
                    </Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>

            </div>
        </>
    )
}
