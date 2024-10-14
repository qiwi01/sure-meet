import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../css/Nav.css"
// function Menu() {
const Menu = ({backgroundImage}) => {
  return (
    <div className='nav-head' style={{backgroundImage: `url(${backgroundImage})`}}>
    <Navbar  expand="lg" className="">
    <Container>
      <NavLink >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to="/">
      <Navbar.Brand to="#home"></Navbar.Brand>
        </NavLink>
        <Nav>
          <Nav.Link>
            <NavLink to="/nearby" style={{ color: "white", textDecoration: "none", borderBottom:"0", justifyContent: "space-between"}}>
              NEAR ME
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink to="/chats" style={{ color:"white",  textDecoration:""}}>
              CHATS
            </NavLink>
          </Nav.Link>

          <Nav.Link>
            <NavLink to="/notification" style={{ color: "white", textDecoration: "none" }}>
              NOT.
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/profile" style={{ color:"white", textDecoration: "none" }}>
              PROFILE
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </NavLink>
      
    </Container>
  </Navbar>
  </div>
  );
}

export default Menu;