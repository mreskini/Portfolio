import { Navbar,Nav } from 'react-bootstrap'
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
export default function Header(){
    return(
        <header>
            <div className="container-fluid p-0">
                <div className="col-12 col-lg-10 m-0 mx-auto">
                    <Navbar variant="light"  className="py-4" expand="lg" sticky="top">
                        <div className="row m-0">
                            <DiCssdeck className="text-light h1 my-auto"/>
                            <div className="text-light h2 mt-1 mr-5">
                                Portfolio
                            </div>
                        </div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="bg-under-large-screen-light">
                            <Nav className="mr-auto">
                                <Nav.Link className="h5 my-auto text-light on-hover-underline">Projects</Nav.Link>
                                <Nav.Link className="h5 my-auto text-light on-hover-underline">Technologies</Nav.Link>
                                <Nav.Link className="h5 my-auto text-light on-hover-underline">About</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link className="h5 my-auto text-light">
                                    <AiFillGithub size="2rem" />
                                </Nav.Link>
                                <Nav.Link className="h5 my-auto text-light">
                                    <AiFillLinkedin size="2rem" />
                                </Nav.Link>
                                <Nav.Link className="h5 my-auto text-light">
                                    <AiFillInstagram size="2rem"/>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}