import { Link, useNavigate, useParams } from "react-router-dom";
import { Symbol } from "../Symbol";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar() {
	const navigate = useNavigate();
	let { symbol } = useParams();

	const onSymbol = (sym) => {
		symbol = "NDAQ";
		console.log(symbol);
	};

	return (
		<>
			<Container>
				<Navbar
					expand="lg"
					bg="dark"
					data-bs-theme="dark"
					className="bg-body-tertiary"
				>
					<Navbar.Brand>Stocks</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown
								title="Dropdown"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item onSelect={onSymbol}>
									{Symbol.Nasdaq}
								</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Dow}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Nvidia}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Apple}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Microsoft}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Google}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Amazon}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Tesla}</NavDropdown.Item>
								<NavDropdown.Item>{Symbol.Meta}</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>About</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link
								as={Link}
								to={"/"}
							>
								Homepage
							</Nav.Link>
							<Nav.Link
								as={Link}
								to={"/stock/intraday/:symbol"}
							>
								Intraday
							</Nav.Link>
							<Nav.Link
								as={Link}
								to={"/stock/daily/:symbol"}
							>
								Daily
							</Nav.Link>
							<Nav.Link
								as={Link}
								to={"/stock/weekly/:symbol"}
							>
								Weekly
							</Nav.Link>
							<Nav.Link
								as={Link}
								to={"/stock/montly/:symbol"}
							>
								Montly
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
			{/* <ul className="navbar-ul">
				<li
					id="h2id"
					onClick={() => navigate("/")}
				>
					Home
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/intraday/:symbol")}
				>
					Intraday
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/daily/:symbol")}
				>
					Daily
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/weekly/:symbol")}
				>
					Weekly
				</li>
				<li
					id="h2id"
					onClick={() => navigate("/stock/montly/:symbol")}
				>
					Montly
				</li>
			</ul> */}
		</>
	);
}
