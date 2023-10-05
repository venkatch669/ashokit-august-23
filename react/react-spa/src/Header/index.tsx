import './index.css';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
function Header() {
	return (
		<div className="Header">
		<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/services">Services</Link>
					</li>
					<li>
						<Link to="/portfolio">portfolio</Link>
					</li>
					<li>
						<Link to="/contactUs">Contact Us</Link>
					</li>
				</ul>
			</nav>
			</Box>
		</div>
	);
}

export default Header;
