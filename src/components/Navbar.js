import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const MyNavbar = ({ onViewChange }) => (
    <BootstrapNavbar bg="dark" variant="dark">
        <BootstrapNavbar.Brand className='m-2' href="#home">LOGO</BootstrapNavbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link onClick={() => onViewChange('goals')}>Metas</Nav.Link>
            <Nav.Link onClick={() => onViewChange('tasks')}>Tareas</Nav.Link>
        </Nav>
    </BootstrapNavbar>
);

export default MyNavbar;
