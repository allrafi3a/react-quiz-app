import React from 'react'
import classes from '../../styles/Videos.module.css'
import Video from './Video'

export default function Videos() {
    return (
        <div class={classes.videos}>
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
    )
}
