import './index.css';
import MediaCard from '../Components/MediaCard';
import Grid from '@mui/material/Grid';
import MSProducts from "../images/microsoft-office-365-software.jpeg";
import GoogleProducts from "../images/cover_googleproducts-850x540.jpg";
import { useParams } from 'react-router-dom';
const obj=[
  {
    title:"google",
    imgPath:GoogleProducts,
    heading:"Google is one of the world's most influential tech companies, and its impact on our daily lives is immeasurable. Here's a detailed overview:",
    subheading:"The name Google originated from a misspelling of googol, which refers to the number 1 followed by 100 zeros. It signifies the vast amount of information the company aimed to organize.",
    products:{
      title:"Google Products: This includes:",
      list:[
        "Search Engine : Google's primary product, a powerful search engine used worldwide.",
        "Gmail : One of the most popular email services with advanced features like Smart Compose and a robust spam filter.",
        "Google Drive : A cloud storage solution that allows users to save files online and sync them with various devices.",
        "Google Docs, Sheets, and Slides : These are part of Google's suite of office applications that offer collaborative editing of documents, spreadsheets, and presentations.",
        "Google Calendar : A scheduling calendar service that integrates with other Google services.",
        "Google Maps and Google Earth : Mapping services that offer street views, directions, local business information, and more.",
        "YouTube : Acquired by Google in 2006, it's the largest video sharing platform where users can upload, share, and view content.",
        "Google Photos : A photo-sharing and storage service.",
        "Google Play : A digital distribution platform that includes an online store for music, movies, books, and Android apps."
      ]
    }
  },
  {
    imgPath:MSProducts,
    title:"microsoft",
    heading:"Microsoft is a vast tech company that offers a wide range of products and services spanning software, hardware, and cloud solutions. Here's an overview of some of their most notable products:",
    subheading:"Windows: This is the widely recognized operating system for personal computers. It comes in various versions, with Windows 10 and Windows 11 being the most recent as of my last update.",
    products:{
      title:"Office Suite: This includes:",
      list:[
        "Microsoft Word: A word processing software.",
        "Microsoft Excel: A spreadsheet software used for calculations, data visualization, and other numerical tasks.",
        "Microsoft PowerPoint: A presentation software.",
        "Microsoft Outlook: An email client, calendar, and contact manager.",
        "Microsoft Access: A database management tool.",
        "OneNote: A note-taking application.",
        "Microsoft Teams: A communication and collaboration platform, gaining traction especially for remote work and learning.",
        "Microsoft Teams: A communication and collaboration platform, gaining traction especially for remote work and learning."
      ]
    }
  }
  
  
]
function PortfolioDetail() {
  const params = useParams();
  const data:any = obj.find((e)=> e.title==params.name) || {};
  return (
    <div className="Portfolio">
      <h1> Portfolio Detail </h1>
      {Object.keys(data).length ?
      <Grid container>
        <Grid xs={6}>
          <img src={data?.imgPath} />
        </Grid>
        <Grid xs={6}>
          <p>{data?.heading} </p>
          <p> {data?.subheading}</p>
          <h1>{data?.products?.title}</h1>
          <ul>
            {data?.products?.list.map((e:any)=> <li>{e}</li>)};
          </ul>
        </Grid>
      </Grid>
    : <p> no data found as per input </p>}
    </div>
  );
}

export default PortfolioDetail;
