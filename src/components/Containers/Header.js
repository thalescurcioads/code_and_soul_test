import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar"
import Container from "./Container";

function Header() {
    return (
        <header>
            <Container className="container-header">
                <Logo/>
                <NavBar/>
            </Container>
        </header>
    );
}

export default Header;