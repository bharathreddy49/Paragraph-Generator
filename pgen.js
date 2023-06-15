const input=document.getElementById("numofwords");
const container=document.querySelector(".container");
 
const getData=()=>{
    console.log(input.value);
};
getData();
const generatewords=(n)=>{
    let text="";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<n;i++){
        const random=(Math.random()*25).toFixed(0);
        text+=letters[random];
    }
    return text;
};

const generatepara=()=>{
    const numofwords=Number(input.value);

    const para=document.createElement("p");

    let data="";
    for(let i=0;i<numofwords;i++){
        const randomnum=(Math.random()*15).toFixed(0);
        data+=generatewords(randomnum);
        data+=" ";
    }

    para.innerText=data; 
    para.setAttribute("class","para");
    container.append(para);
};

