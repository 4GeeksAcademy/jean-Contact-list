import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-5 h1"><i className="fa-solid fa-address-book">Miami class 77</i></span>
				</Link>
				<div className="ml-auto">
					<Link to="/create">
						<p className="btn btn-primary " to={"/create"}>Add New Contact</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};