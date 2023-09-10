
$(document).ready(function(){
    $("#get").click(()=>{
       // alert("get");
       fetch("http://localhost:3004/posts").then((res)=> res.json()).then((res)=>{
        console.log(res);
       })
    })

    $("#post").click(()=>{
        const payload= {
            "title": "react",
            "author": "fb"
          }
          fetch("http://localhost:3004/posts",{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(payload)
          })
          console.log("Test")
    })

    $("#put").click(()=>{
            const payload= {
            "title": "angular",
            "author": "google"
          }
          fetch("http://localhost:3004/posts/5",{
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(payload)
          })
    })

    $("#delete").click(()=>{
          fetch("http://localhost:3004/posts/5",{
            method:'DELETE',
           })
    })

})