import { Link, Outlet } from 'react-router-dom';
import './index.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function Services() {
  return (
    <div className="Services">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <ul className="menu">
            <li> <Link to="."> development Services </Link></li>
            <li> <Link to="consulting/venkat"> Consulting Services - venkat</Link></li>           
            <li> <Link to="consulting/rajesh"> Consulting Services - rajesh</Link></li>           
            <li> <Link to="consulting"> Consulting Services </Link></li>
            <li> <Link to="training"> Training Services </Link></li>
          </ul>
        </Grid>
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
