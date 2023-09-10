
$(document).ready(function(){
  $("#promise").click(()=>{
    const promiseFun = (input)=>{
        return new Promise((resolve, rejected)=>{
          if(input%2==0){
            setTimeout(() => {        
              console.log(1);
              resolve("even number");
            },1000);				 
          }
          else{
            rejected("odd  number");
          }
        });
    }
      var a =prompt("please enter any number");
     promiseFun(a).then((res)=>{
      console.log("success", res);
     }).catch((err)=>{
      console.log("error", err);
     })

    console.log("message")

 })

    $("#get").click(async ()=>{
       // alert("get");
      //  fetch("http://localhost:3004/posts").then((res)=> res.json()).then((res)=>{
      //   console.log("fetch",res);
      //  })

      //  axios.get("http://localhost:3004/posts").then((res)=>{
      //   console.log("axios",res);
      //  }).catch((ex)=>{
      //   console.log("something went wrong, pelase try again")
      //  })
      //  console.log("welcome");

      try{
        const res = await axios.get("http://localhost:3004/test");
        console.log(res);
        console.log("welcome");
      }catch(er){
        console.log("error handling",er);
      }
      // .then((res)=>{
      //   console.log("axios",res);
      //  }).catch((ex)=>{
      //   console.log("something went wrong, pelase try again")
      //  })

    })

    $("#post").click(()=>{
        const payload= {
            "title": "react",
            "author": "fb"
          }
          // fetch("http://localhost:3004/posts",{
          //   method:'POST',
          //   headers: {
          //       "Content-Type": "application/json",
          //   },
          //   body:JSON.stringify(payload)
          // })

          axios.post("http://localhost:3004/posts",payload).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })


          
          console.log("Test")
    })

    $("#put").click(()=>{
            const payload= {
            "title": "angular",
            "author": "google"
          }
          // fetch("http://localhost:3004/posts/5",{
          //   method:'PUT',
          //   headers: {
          //       "Content-Type": "application/json",
          //   },
          //   body:JSON.stringify(payload)
          // })

          axios.put("http://localhost:3004/posts/6",payload).then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })

    })

    $("#delete").click(()=>{
          // fetch("http://localhost:3004/posts/5",{
          //   method:'DELETE',
          //  })
          axios.delete("http://localhost:3004/posts/6").then((res)=>{
            console.log(res);
          }).catch((err)=>{
            console.log(err);
          })
    })

})