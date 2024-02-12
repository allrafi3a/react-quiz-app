import React from 'react'
import classes from '../styles/Textinput.module.css'

export default function Textinput({ type, placeholder }) {
    return (
        <div className={classes.textInput}>
            <input type={type} placeholder={placeholder} />
            <span className="material-icons-outlined"> person </span>
        </div>
    )
}
