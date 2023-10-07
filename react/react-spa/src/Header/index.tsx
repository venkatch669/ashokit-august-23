import './index.css';
import { Link, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
const objLinks=[
	{
		routePath:"/",
		label:"Home"
	},
	{
		routePath:"/about",
		label:"about us"
	},
	{
		routePath:"/services",
		label:"services"
	},
	{
		routePath:"/portfolio",
		label:"portfolio"
	},
	{
		routePath:"/contactUs",
		label:"contact Us"
	}
]
function Header() {
	return (
		<div className="Header">
		<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}>
			<nav>
				<ul>
					{objLinks.map((e)=><li>
						<NavLink className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}
						  to={e.routePath}>{e.label}</NavLink>
					</li>)}
				</ul>
			</nav>
			</Box>
		</div>
	);
}

export default Header;
