import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from 'react-stars';

function NavBar({setInputSearch,setInputStars}) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
      <img  style={{width:120, hieght:120}}  src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"/>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Serie</Nav.Link>
             <Nav.Link href="#" disabled> Film </Nav.Link>
          </Nav>
       
                 <ReactStars
                 count={5}
                 value={0}
                 onChange={(e)=>setInputStars(e)}
                 size={24}

                 half={false}
                 color2={'#ffd700'}/>
                  <Form.Control style={{width:500}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>setInputSearch(e.target.value)}
                  />
                  <Button  onClick={()=>(setInputSearch(""),setInputStars(0))} variant="outline-success">Clear</Button>
               
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;