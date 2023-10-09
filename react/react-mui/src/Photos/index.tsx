import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './index.css';
import { getAPI } from "../restutil";
function Photos() {
  const [photosData, setPhotosData] = useState([]);

  const getDataFromAPI = ()=>{
    getAPI('/photos').then((res:any) => {
      setPhotosData(res.data);
    })
      // Fetch implementation 
    // getAPI('/photos').then((e) => e.json()).then((res) => {
    //   setPhotosData(res);
    // })
  }

  return (
    <div>
      <h1> Photos </h1>
      <button onClick={()=> getDataFromAPI()}> get Images </button>
      {photosData.map((e: { title: string, thumbnailUrl:string, id:number }) => {
        return (
          <div className="grid"><Card sx={{ maxWidth: 345 }} key={e.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={e.thumbnailUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
        )
      })}
    </div>
  );
}

export default Photos;
