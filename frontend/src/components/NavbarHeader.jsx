
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import avatar from '../assets/avatar5.png'
import '../styles/profile.css'



function NavbarHeader({submit}) {
  
  
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile"><img src={avatar} alt="Avatar" class="avatar"/></NavDropdown.Item>
              <NavDropdown.Item href="/resetpassword">
               Reset Password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            
            
            <Nav.Link href="/inputdata" >
              Input Data
            </Nav.Link>
            <NavDropdown title="" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;