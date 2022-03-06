import React,{useState} from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import {Link} from "react-router-dom";


export default function NavbarComp(props) {

    const [style,setStyle] = useState({color:"#212529"})

    const labelStyle = ()=>
    {
        props.toggleMode();
        if(props.mode==="dark")
        {
            setStyle({color:"#212529"});
        }
        else
        {
            setStyle({color:"white"});
        }
    }

    return (
        <>
            <Navbar bg={props.mode} variant={props.mode} expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>


                        </Nav>

                            <Form.Check type="switch" id="custom-switch" style={style} label={`${props.mode==="dark"?"Disable":"Enable"} Dark Mode`} onChange={labelStyle}/>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
