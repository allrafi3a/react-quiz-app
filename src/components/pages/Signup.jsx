import React from 'react'
import classes from '../../styles/Signup.module.css'
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
                    <Textinput></Textinput>
                </Form>

            </div>
        </>
    )
}
