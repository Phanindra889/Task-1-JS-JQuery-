

function checkEmptyCells(){
    
    var ame=document.getElementById("fname").value;
    var email=document.getElementById("email").value;
    var organization=document.getElementById("organization").value;
    
    if(ame==""){ 
              
        document.getElementById("alert-name").innerHTML="name is required"; 
    }
    else{
        document.getElementById("alert-name").innerHTML="*";
    }
     if(email==""){
         document.getElementById("alert-mail").innerText="email is required";
     }
     else{
        document.getElementById("alert-mail").innerText="*";
     }
     if(organization==""){
         document.getElementById("alert-organization").innerHTML="organization is required";
     }
     else{
        document.getElementById("alert-organization").innerHTML="*";
     }
     if(ame=="" || email=="" || organization==""){
         document.getElementById("alert-to-fill").innerHTML="Please fill all the required fields below";
     }
     else{
        document.getElementById("alert-to-fill").innerHTML="*";
     }
}

function genderMaleAlert(){
        alert("Hello Sir");
}
function genderFemaleAlert(){
        alert("Hello Lady");
}

function promotionCode(){
    var state=document.getElementById("state-province").options;
    document.getElementById("promotion-code").value=state[state.selectedIndex].text+"-PROMO";
}

function emailValidation(){
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(filter.test(email))) {
            document.getElementById("alert-mail").innerText="Please provide valid email address";
        }
        else{
            document.getElementById("alert-mail").innerText="*";
        }
}

function clearForm(){
    location.reload();
}

function resumeUpload(){
    var filepath=String(document.getElementById("browse-file").value);
    document.getElementById("upload-resume").value=filepath.split(/(\\|\/)/g).pop();
    
}



