import './index.css';
import MediaCard from '../Components/MediaCard';
import Grid from '@mui/material/Grid';
const trainingtypes =   [
  {
    imgpath:"https://www.ashokitech.com/uploads/course/spring-boot-microservices-online-training.jpeg", 
    title:"Spring Boot & Microservices",  
    color:"green"
  },
  {
    imgpath:"https://www.ashokitech.com/uploads/course/java-realtime-project-online-training.png", 
    title:"Java Real time Project",
    color:"#fc7e14"
  },
  {
    imgpath:"https://www.ashokitech.com/uploads/course/java-fullstack-development-online-training.jpeg",
    title:"Java full stack development",
    color:"#4588c0"
  },
  {
    imgpath:"https://www.ashokitech.com/uploads/course/devops-with-aws-online-training.jpeg",
    title:"Devops with AWS",
    color:"#8764c2"
  },
  {
    imgpath:"https://www.ashokitech.com/assets/frontend/images/conference.png",
    title:"Weekend Workshops",
    color:"#8764c2"
  }
]

function Home() {
  return (
    <div className="Home">
      <h1> Home </h1>
      <Grid container spacing={2}>        
        {trainingtypes.map((e) =><Grid item xs={4}> <MediaCard obj={e}/> </Grid>)}       
      </Grid>
    </div>
  );
}

export default Home;
