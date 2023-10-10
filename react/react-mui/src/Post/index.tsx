import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TableComp from "../Components/TableComp";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './index.css';


import { getAPI, postAPI } from "../restutil";
import { Typography } from "@mui/material";
function Post() {
  const [tableData, setTableData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [record, setRecord] = useState({
    userid:'',
    title:'',
    body:''
  });
  useEffect(() => {
    getDataFromAPI();
    // :: fetch implementation ::
    // getAPI('/posts').then((e:any)=> e.json()).then((res:any)=>{
    //   setTableData(res);
    // }).catch((e)=>{

    // });
  }, []);

  const getDataFromAPI = () =>{
    getAPI('/posts').then((res: any) => {
      setTableData(res.data);
    }).catch((e) => {
      console.log("error occured", e);
    })
  }
  const saveFun = () =>{
    console.log(record);
    postAPI("/posts", record).then((e)=>{
      console.log("succefully created");
      getDataFromAPI();
    }).catch((e)=>{
      console.error("something went wrong", e);
    })
  }
  const clearFun = () =>{
    setRecord({
      userid:'',
      title:'',
      body:''
    });
  }

  const setRecordFun =(data:any) =>{
    setRecord(data);
    setIsUpdate(true);
    // console.log(data);
  }
  const updateFun =() =>{
    console.log("update");
  }
  

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TableComp tableData={tableData} setRecordFun={setRecordFun}/>
          </Grid>
          <Grid item xs={6}>           
            <div className="addnewrecord">
              <Typography> new record </Typography>
              <ul>
                <li> <TextField id="userId" label="User Id" variant="standard" value={record.userid} onChange={(event)=>{
                  setRecord({...record, userid:event?.target.value})
                }}/> </li>
                <li> <TextField id="title" label="title" variant="standard" value={record.title} onChange={(event)=>{
                  setRecord({...record, title:event?.target.value})
                }}/></li>
                <li> <TextField id="body" label="body" variant="standard" value={record.body} onChange={(event)=>{
                  setRecord({...record, body:event?.target.value})
                }}/></li>
                <li>
                  {isUpdate ? <Button variant="contained" onClick={updateFun}>Update</Button> : 
                  <Button variant="contained" onClick={saveFun}>Save</Button>}
                  <Button variant="outlined" onClick={clearFun}>Clear</Button>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Post;
