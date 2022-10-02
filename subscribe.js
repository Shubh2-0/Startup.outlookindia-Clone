document.querySelector("#sim").addEventListener("click",hy)

function hy(){
let cod=document.querySelector("#code").value
if(cod=="masai30"){
    swal("Congratulations", "You are eligible for DISCOUNT", "success");
}
else if(cod!="masai30" && cod!=""){
    swal("Opps", "You enter Wrong Code", "warning");
}
else if(cod==""){
      swal("Epmty Value",);
}
}