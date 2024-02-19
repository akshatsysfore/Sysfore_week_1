const User= document.getElementById("Usernameid");
const userlabel=document.createElement("label");
userlabel.innerHTML="Username";
const userinput=document.createElement("input");
userinput.setAttribute("type","email");
userinput.setAttribute("placeholder","username@gmail.com")
User.appendChild(userlabel);
User.appendChild(userinput);

const Pass= document.getElementById("Passwordid");
const passlabel=document.createElement("label");
passlabel.innerHTML="Password";
const passinput=document.createElement("input");
passinput.setAttribute("type", "password");
passinput.setAttribute("placeholder","********")
User.appendChild(passlabel);
User.appendChild(passinput);

const button=document.getElementById("butid");
const logbutton=document.createElement("button");
logbutton.innerHTML="submit";
button.append(logbutton);


function show(){
    if(ValidateEmail(userinput)){
    let Password=passinput.value;
    let username=userinput.value;
    alert("Username: "+ username+"\n" +"Password: "+ Password);
    }
    login(userinput,passinput);
    
}

logbutton.addEventListener("click",validateForm);

function validateForm() {
    let x = userinput.value;
    let y= passinput.value;
    if (x == "" && y!="") {
      alert("username must be filled out");
      return false;
    }
    else if (y == "" && x!="") {
        alert("password must be filled out");
        return false;
      }
     else if (x == "" && y=="") {
        alert("username and password both must be filled out");
        return false;
      }
    else 
        show();
    
  } 
  
  function ValidateEmail(userinput) {

    var val = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (userinput.value.match(val)) {
      alert("Valid email address!");
      return true;
    } else {
    alert("Invalid email address!");
      return false;
    }
  
  }
 
 function login(userinput,passinput) {
    const database={
        "akshat@gmail.com":"akshat",
        "vishnu@gmail.com":"vishnu",
        "hitesh@gmail.com":"hitesh"
        }
        if (!(userinput.value in database))
        alert("user is not registered");
        else{
            if(passinput.value==(database[userinput.value]))
            {
                alert("Access Granted");
            }
            else
                alert("Access Denied please retry"); 
        }
        return
        
 }
