import React from 'react'
import { Alert } from 'react-bootstrap';


export default function AlertComp(props) {
    return (
        props.alert && <Alert variant={props.alert.variant}>
            {props.alert.msg}
        </Alert>
    )
}
