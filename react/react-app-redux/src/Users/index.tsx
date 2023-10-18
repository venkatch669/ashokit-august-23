import React, { useEffect, useState } from 'react';
import './index.css';
import Table from 'react-bootstrap/Table';
import SpinnerComp from '../Spinner';
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from "../features/users/usersSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Users() {
  const dispatch:any = useDispatch();
  const users = useSelector((state:any)=> state.users.userData)
  const showSpinner = useSelector((state:any)=> state.users.userDataLoading);
  const isSuccess = useSelector((state:any)=> state.users.isSuccess);

  const getUsersData =()=>{
    dispatch(fetchUsers())
  }

  useEffect(()=>{
    if(isSuccess===false){
      toast.error('Something went wrong, please try again ...', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  },[isSuccess])
  
  return (
    <div className="users">
      <ToastContainer />
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
