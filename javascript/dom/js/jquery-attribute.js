$("#changeImg").click(()=>{
   // console.log($(".img").attr("src")); //getAttribute
    $("#imgPath").attr("src","./images/palace.JPG"); //setAttribute
})

$("#duplicate").hover(()=>{
    let imgURL = $(".img").attr("src")
    let imgTag=`<img src="${imgURL}" class="img asdf"/>`;
    // $("#box").append(imgTag);
    // console.log($("#box").html())
    // $("#box").html("<h1> welcome </h1>") // innerHTML

    // console.log($("#box").text())
    $("#box").text("<h1> welcome </h1>") // innerText

})