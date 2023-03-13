function dropDownAppend(){
    
    const states=["Andhra Pradesh","Arunachal Pradesh ","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Lakshadweep","National Capital Territory of Delhi","Puducherry"];
    for ( let state of states){
        var child=document.createElement('option');
        child.value=state;
        child.text=state;
        document.getElementById("state-province").add(child);
    }
}

function checkEmptyCells(){
    var count=0
    var p=checkFilled("organization",'alert-organization',"organization is required",count);
    var q=checkFilled("email",'alert-mail',"email is required",count);
    var r=checkFilled("fname",'alert-name',"name is required",count);
    if(p!=0 || q!=0 || r!=0){
        document.getElementById("alert-to-fill").innerHTML="Please fill all the required fields below";
    }
    else{
        var mail=document.getElementById("email").value;
        if(emailValidation(mail))
            alert("Please enter valid email id");
        else{
            alert("Details submitted successfully");
            location.reload();
        }
    }    
}

function checkFilled(source,destinationId,message,count){
    var tmp=document.getElementById(source).value;
    
    if(tmp==""){
        document.getElementById(destinationId).textContent=message; 
        count+=1  
    }
    else{
        document.getElementById(destinationId).textContent="";
    }
    return count;
}

function genderSelection(value){
    if(value=='male')
        alert("Hello Sir");
    else
        alert("Hello Lady");
}


function promotionCode(){
    var state=document.getElementById("state-province").options;
    document.getElementById("promotion-code").value=state[state.selectedIndex].text+"-PROMO";
}

function emailValidation(emailid){
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(filter.test(emailid))) {
            document.getElementById("alert-mail").innerText="Please provide valid email address";
            return true;
        }
        else{
            document.getElementById("alert-mail").innerText="";
        }
        
}

function clearForm(){
    location.reload();
}

function resumeUpload(){
    var filepath=String(document.getElementById("browse-file").value);
    document.getElementById("upload-resume").value=filepath.split(/(\\|\/)/g).pop();
    
}

