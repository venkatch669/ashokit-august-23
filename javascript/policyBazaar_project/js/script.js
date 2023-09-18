
let selectedValueFromStep1=[];
const obj=[
    {
        name:'Self',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Female',
        pathURL:'./images/health-wife-icon.svg'
    },
    {
        name:'Son',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Daugher',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Father',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Mother',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Grand Father',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Grand Mother',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'Father-in-law',
        pathURL:'./images/health-self-icon.svg'
    },
    {
        name:'mother-in-law',
        pathURL:'./images/health-self-icon.svg'
    }
]

const prepareList = (no)=>{
    let items = ''
    for(let i=0;i<no;i++){
        items +=`<li><button class="btn btn-outline-primary btn-block"><img src="${obj[i].pathURL}"/>${obj[i].name}</button></li>`
    }
    $("#items").html(items); // html will replace selector 
    // $("#items").append(items); // append will append to the selector
}   

let prepareDropdowns = function(){
    let val =''
    for(let i=0;i<selectedValueFromStep1.length;i++){
        val+=`<li>
        <div class="row">
        <div class="col-2">                                  
                <img src="./images/health-self-icon.svg"/>
        </div>
        <div class="col-10">
            <select class="form-select" aria-label="Default select example">
            ${getDropdownValues()}
            </select>
        </div>
    </li>`
    }
    $("#dropdowns").html(val);    
}
let getDropdownValues = () =>{
    let options ='';
    for(let i=18;i<=100;i++){
        options += `<option>${i} Years</option>`
    }
    return options;
}

// $("#items .btn-block").click(()=>{
//     // $(this).toggleClass("selected");
//     alert("Test")
// });

$(document).ready(function(){
    prepareList(6);
});

$("#moreoptions").click(()=>{
    prepareList(obj.length);
})

$(document).on("click","#items .btn-block",function(){
    $(this).toggleClass("selected-btn");
    console.log(this);
    let text= $(this).text();
    let index = selectedValueFromStep1.indexOf(text);
    if(index==-1){
        selectedValueFromStep1.push(text)
    }
    else{
        selectedValueFromStep1.splice(index,1);
    }
    console.log(selectedValueFromStep1);
    $("#step-1-error-msg").hide();
    // alert("Test")
})

$("#step1-continue").click(()=>{
    if(selectedValueFromStep1.length){
        $("#step-1").hide();
        $("#step-2").show();
       
        prepareDropdowns();
    }
    else{
        $("#step-1-error-msg").show();
    }
})
$("#step2-back").click(()=>{
    $("#step-1").show();
    $("#step-2").hide();
})
