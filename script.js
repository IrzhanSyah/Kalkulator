let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Input yang anda masukkan tidak valid");
    }
}

function del(){
    result.value= " ";
}

function clr(){
    result.value=result.value.slice(0,-1);
}