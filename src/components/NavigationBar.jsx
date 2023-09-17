import { Link, useNavigate, useParams } from "react-router-dom";
import { Symbol } from "../Symbol";
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { UserContext } from "../App";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavigationBar() {
	const navigate = useNavigate();
	const { setLink } = useContext(UserContext);
	let { symbol } = useParams();

	const handleDropdownClick = (symbol) => {
		setLink(symbol); // Set the symbol
	};

	return (
		<>
	
				<Navbar
					expand="lg"
					bg="dark"
					data-bs-theme="dark"
					className="bg-body-tertiary" 
					
				>
					<Navbar.Brand>Stock Market</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown
								title="Select a Stock"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Nasdaq}
									onClick={() => handleDropdownClick(Symbol.Nasdaq)}
								>
									{Symbol.Nasdaq}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Dow}
									onClick={() => handleDropdownClick(Symbol.Dow)}
								>
									{Symbol.Dow}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Nvidia}
									onClick={() => handleDropdownClick(Symbol.Nvidia)}
								>
									{Symbol.Nvidia}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Apple}
									onClick={() => handleDropdownClick(Symbol.Apple)}
								>
									{Symbol.Apple}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Microsoft}
									onClick={() => handleDropdownClick(Symbol.Microsoft)}
								>
									{Symbol.Microsoft}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Google}
									onClick={() => handleDropdownClick(Symbol.Google)}
								>
									{Symbol.Google}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Amazon}
									onClick={() => handleDropdownClick(Symbol.Amazon)}
								>
									{Symbol.Amazon}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Tesla}
									onClick={() => handleDropdownClick(Symbol.Tesla)}
								>
									{Symbol.Tesla}
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to={"/stock/intraday/" + Symbol.Meta}
									onClick={() => handleDropdownClick(Symbol.Meta)}
								>
									{Symbol.Meta}
								</NavDropdown.Item>
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
		</>
	);
}
