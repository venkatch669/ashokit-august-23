import React, { useState } from 'react';
import './index.css';
import Table from 'react-bootstrap/Table';
import SpinnerComp from '../Spinner';

function Users() {
  const [users, setUserData]= useState<any>({});
  const [showSpinner, toggleSpinner]= useState<boolean>(false);

  const getUsersData =()=>{
    toggleSpinner(true);
    setTimeout(()=>{
        fetch('https://dummyjson.com/users').then((res)=> res.json()).then((res)=>{
            setUserData(res);
            console.log(res);
            toggleSpinner(false);
        })
    },2000)
  }
  
  return (
    <div className="users">
        {showSpinner && <SpinnerComp/>}
        <button onClick={()=>
        getUsersData()}> get Users</button>

    <Table striped bordered hover>
          <thead>
            <tr>
                <th> profile icon </th>
                <th> Id </th>
                <th> first Name</th>
                <th> gender</th>
                <th> university</th>
                <th> color </th>
              </tr>
          </thead>
          <tbody>
            {users?.users?.map((e:any)=><tr>
              <td>
                <img src={e.image}/>
              </td>
              <td>{e.id}</td>
              <td>{e.firstName}</td>
              <td>{e.gender}</td>
              <td>{e.university}</td>
              <td>{e.hair.color}</td>
            </tr>)}
          </tbody>
        </Table>
        <h1> Users </h1>
    </div>
  );
}

export default Users;
