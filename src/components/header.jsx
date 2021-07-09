import { Navbar, Nav } from 'react-bootstrap'
import { DiCssdeck } from 'react-icons/di'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { useHistory } from 'react'

export default function Header() {
    const scrollToView = (id) => {
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
        })
    }
    return (
        <header>
            <div className="container-fluid p-0">
                <div className="col-12 col-lg-10 m-0 mx-auto">
                    <Navbar variant="dark" className="py-4" expand="lg" sticky="top">
                        <a href="/" className="btn p-0">
                            <div className="row m-0">
                                <DiCssdeck className="text-light h1 my-auto" />
                                <div className="text-light h2 mt-1 mr-5">
                                    Portfolio
                                </div>
                            </div>
                        </a>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="bg-under-large-screen-light ml-2 ml-lg-0 mt-lg-0 mt-3">
                            <Nav className="mr-auto">
                                <Nav.Link className="h5 my-auto text-light on-hover-underline"  onClick={() => scrollToView("#projects")} >Projects</Nav.Link>
                                <Nav.Link className="h5 my-auto text-light on-hover-underline"  onClick={() => scrollToView("#technologies")} >Technologies</Nav.Link>
                                <Nav.Link className="h5 my-auto text-light on-hover-underline"  onClick={() => scrollToView("#about")} >About</Nav.Link>
                                <Nav.Link className="h5 my-auto text-light on-hover-underline"></Nav.Link>
                            </Nav>
                            <Nav className="ml-auto">
                                <Nav.Link className="h5 my-auto text-light icon-hoverable">
                                    <AiFillGithub size="2rem" />
                                </Nav.Link>
                                <Nav.Link className="h5 my-auto text-light icon-hoverable">
                                    <AiFillLinkedin size="2rem" />
                                </Nav.Link>
                                <Nav.Link className="h5 my-auto text-light icon-hoverable">
                                    <AiFillInstagram size="2rem" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}