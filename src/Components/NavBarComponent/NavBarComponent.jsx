import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TIENDA Alan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">NOSOTROS</Nav.Link>
            <Nav.Link href="#link">CONTACTO</Nav.Link>
            <NavDropdown title="MAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TABLAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BARRAS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">ARNESES</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                EQUIPOS
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidgetComponent/>

         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;