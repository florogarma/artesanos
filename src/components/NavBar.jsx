import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
          <NavLink to="/">Artesanos Orgánicos</NavLink>
            </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="category/verdura">Verduras</NavLink>
            <NavLink to="category/fruta">Frutas</NavLink>
          </Nav>
          <CartWidget />
        </Container>
    </Navbar>   
    );
};