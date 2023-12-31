import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export default function MediaCard(props:any) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.obj.imgpath}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.obj.title}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Preview</Button>
        <Button size="small" variant="outlined" onClick={()=>{
          navigate(`/portfoliodetails/${props.obj.title}`);
        }}>View Details</Button>        
      </CardActions>
    </Card>
  );
}