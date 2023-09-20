
let selectedValueFromStep1=[];
let obj=[];
let cities=[];
const getDataFromAPI = (domain) =>{
    return ((endpoint)=>{
        return fetch(domain+endpoint);
    })
}
const getData = getDataFromAPI("http://localhost:3004");

const prepareList = (no)=>{
    let items = ''
    for(let i=0;i<no;i++){
        items +=`<li><button class="btn btn-outline-primary btn-block"><img src="${obj[i].pathURL}"/>${obj[i].name}</button></li>`
    }
    $("#items").html(items); // html will replace selector 
    // $("#items").append(items); // append will append to the selector
}   

const prepareCities= ()=>{
    let items = ''
    for(let i=0;i<cities.length;i++){
        items +=`<li><button>${cities[i].cityName}</button></li>`
    }
    $("#cities").html(items); 
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
    let options ='<option></option>';
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
    // prepareList(6);   
    getData("/people").then(res => res.json()).then((res)=>{
        obj = res;
        prepareList(6);  
    }); 
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

$(document).on("click","#cities button",function(){ 
    $("#cityname").val($(this).text())
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

$("#step3-continue").click(()=>{
    let textboxvalue = $("#cityname").val();
    $("#step3-errormsg").hide();
    if(textboxvalue){

    }
    else{
        $("#step3-errormsg").show();
    }
})

$("#step2-continue").click(()=>{
    let ageSelected = 0;
    $(".form-select").each((e)=>{
        if(document.getElementsByClassName("form-select")[e].value){
            ageSelected++;
        }
    })
    console.log(ageSelected);
    $("#step2-errormsg").hide();
    if( $(".form-select").length==ageSelected){
        $("#step-3").show();
        $("#step-2").hide();
        getData("/cities").then(res => res.json()).then((res)=>{
            cities = res;
            prepareCities();
        });        
    }
    else{
        $("#step2-errormsg").show();
    }
});

$("#step3-back").click((event)=>{
    // event.preventDefault();
    $("#step-1").hide();
    $("#step-2").show();
    $("#step-3").hide();
})


$("#step2-back").click(()=>{
    $("#step-1").show();
    $("#step-2").hide();
})


