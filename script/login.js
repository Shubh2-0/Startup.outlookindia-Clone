
let veri=document.getElementById("verify")
veri.style.backgroundColor="#15213D"
veri.style.color="white"
veri.style.cursor="pointer"

document.querySelector("form").addEventListener("submit",show)

function show(event){
    event.preventDefault();
    let form=document.querySelector("form")
    let email=form.email.value
    if(email!=""){
        swal("Enter OTP:", {
  content: "input",
})
.then((value) => {
  swal(`Your Password is: ${value}`);
});
    }
    else{
        swal("Empty Field", "Please Enter Email Address", "warning");
    }
}
document.getElementById("login").addEventListener("click",change)
document.getElementById("login").style.cursor="pointer"

function change(){
    swal("Are you want to Login with Phone Number", {
  buttons: ["Cancel", "Yes"],
});
}


