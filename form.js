let form = document.getElementById('inputcontainer');

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    // input elements
    let name = document.getElementById('nameinput').value.trim(); 
    let email = document.getElementById('mailinput').value.trim(); 
    let number = document.getElementById('numberinput').value.trim();
    let maleRadio = document.getElementById('male');
    let femaleRadio = document.getElementById('female');
    let Checkbox = document.querySelector('.checkbox input');
    let textarea = document.getElementById('textarea').value.trim();
    // result elements
    let nameresult = document.getElementById('nameresult')
    let mailresult = document.getElementById('mailresult')
    let numberresult = document.getElementById('numberresult')
    let genderresult = document.getElementById('genderresult')
    let Commandresult = document.getElementById('commandresult')

    // error elements
    let nameerror = document.getElementById('nameerror')
    let emailerror = document.getElementById('mailerror')
    let numbererror = document.getElementById('numbererror')
    let textareaerror = document.getElementById('textareaerror')

    let validation = true

    // reset error message
    nameerror.textContent = ""
    emailerror.textContent = ""
    numbererror.textContent = ""
    textareaerror.textContent = ""



    // name validation
    if(name === ''){
        nameerror.textContent = "Please Enter Your Name"
        validation = false
    }
    else if(/\d/.test(name)){
        nameerror.textContent = "Invalid Name, Please Enter Name Without Number"
    }
    else{
        nameresult.append(name)
    }
    // mail validation
    if(email === ''){
        emailerror.textContent = "Please Enter Your Email"
        validation = false
    }
    else{
        mailresult.append(email)
    }
    // number validation
    let numberPattern = /^[0-9]{10}$/;
    if(number === ''){
        numbererror.textContent = "Please Enter Your Number"
        validation = false
    }
    else if(!numberPattern.test(number)){
        numbererror.textContent = "Please Enter a Valid 10-digit Mobile Number"
        validation = false
    }
    else{
        numberresult.append(number)
    }
    //  gender validation
    if(!maleRadio.checked && !femaleRadio.checked){
        alert("Please Select Your Gender")
        validation = false
    }
    else{
        genderresult.textContent = maleRadio.checked ? 'Male' : (femaleRadio.checked ? 'Female' : 'Not selected');
    }

    // checkbox validation
    if(!Checkbox.checked){
        alert("You must agree to the terms and conditions")
        validation = false
    }
    // text area validation
    if(textarea === ''){
        textareaerror.textContent = "Please drop Your Command here"
        validation = false
    }
    else{
        Commandresult.append(textarea)
    }

    if(validation){
        e.preventDefault
    }


});