import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useRouter } from "next/router";
import Link from "next/link";


export default function Header() {

  return (
    <>
    <div>EJLISH</div>
    <nav>
        <Link href={'/answer'}>
                <a>Answer</a>
        </Link>
        <Link href={'/question'}>
                <a>Question</a>
        </Link>
    </nav>
    </>
    // <Navbar bg="light" expand="lg">
    //     <div> EJLISH</div>
    //     <Navbar.Brand href="#home">EJLISH</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-aansweruto">
    //         <Link href={'/answer'}>
    //            <a>Answer</a>
    //         </Link>
    //         <p style={{width: `20px`}}></p>
    //         <Link href={'/question'}>
    //            <a>Question</a>
    //         </Link>
    //       </Nav>
    //     </Navbar.Collapse>

    // </Navbar>
  );
}

