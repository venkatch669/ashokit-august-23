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

$(document).ready(function(){
    prepareList(6);
});

const prepareList = (no)=>{
    let items = ''
    for(let i=0;i<no;i++){
        items +=`<li>
                <button class="btn btn-outline-primary btn-block">
                    <img src="${obj[i].pathURL}"/>
                    ${obj[i].name}
                </button>
        </li>`
    }
    $("#items").html(items);
}

$("#moreoptions").click(()=>{
    prepareList(obj.length);
})