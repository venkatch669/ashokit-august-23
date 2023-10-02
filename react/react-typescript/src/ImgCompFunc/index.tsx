import React, { useEffect, useState } from "react";

export default function ImgCompFun(props:any){   
    const [name, setName]= useState<any>({});
    const [record, setRecord]= useState<any>();

    // did mount 
    useEffect(()=>{
        console.log("did mount - html/css is rendered : step-B");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    },[]);

    // did update
    useEffect(()=>{
        console.log("did update - state/props changes: step-C")
    });

    // did update with name watch
    useEffect(()=>{
        console.log("did update - on name change")
    },[name]);

    // useEffect(()=>{
    //     if(record.name=="venkat"){
    //         // ....
    //     }
    // },[record, name])
    
    useEffect(()=>{
        console.log(name.venkat);
        console.log(name.venkat.fullname)
        return(()=>{
         console.log("unmount - removing from DOM: step-D")
        });
        
    },[]);

    return(
        <> 
        {/* //React.Fragment */}
            <p>{props.text}</p>
            <p>state value : { name.name} </p> 
            {/* rajesh */}
            {/* ankit */}
            <button onClick={()=>{
                // setState({name:"ankit", no:1});
               // setName({name:"ankit", no:1});
                props.changeName("welcoem to ashok it")
                //console.log("---", name);                  // rajesh 
            }}> change the name</button>
        </>
    )
    
}