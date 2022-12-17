'use strict';


        // Email 
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        // DOM Variable
        
            
        // required 
            // subject 
                let subjectMinimum = 10;
            // Adress
                let addressMinimum = 25;
            // Name 
                let fullNameMinimum = 4;
        // Check Required
            // Name
                let nameReq = false;
            // Mail
                let mailReq = false;
            // Address
                let adressReq = false;
            // Subject
                let subjectReq = false;


    // This the event lister for submit button

    formIN.addEventListener('keydown', checkName);
    formIM.addEventListener('keydown', checkMail);
    formA.addEventListener('keydown', checkAdress);
    formS.addEventListener('keydown', checkSubject);
    formBtn.addEventListener('click', checkForm);


    function trimit(InputText) {
        return InputText.trim()
    }

    function classAdd(Element) {
        Element.classList.add('required-complett');
        Element.classList.remove('required-fail');
    }

    function classRemove(Element) {
        Element.classList.add('required-fail');
        Element.classList.remove('required-complett');
    }

    function deactiveElement(Element) {
        Element.disabled = true
    }

    function checkName(){
        
        let fullName = trimit(formIN.value);
        
        
        if(fullNameMinimum <= fullName.length){
            classAdd(formINT);
            nameReq = true;
            console.log(nameReq);
        } else {
            classRemove(formINT);
            nameReq = false;
        }
        

    }

    function checkMail(){
        const checkMail = filter.test(formIM.value)
        
        if(checkMail) {
            classAdd(formEM);
            mailReq = true
        }else {
            classRemove(formEM);
            mailReq = false;
        }
    }



    function checkAdress() {
        let address = trimit(formA.value)

        if(addressMinimum <= address.length){
            classAdd(formAT);
            adressReq = true;
        }else {
            classRemove(formAT);
            adressReq = false;
        }

    }

    function checkSubject() {
        let subject = trimit(formS.value);
        
        if(subjectMinimum <= subject.length) {
            classAdd(formST);
            subjectReq = true;
            
        }else {
            classRemove(formST);
            subjectReq = false;
        }
    }   

    function checkForm(){
        console.log("press the button");

        
        if(!nameReq) {
            console.log(nameReq)
            classRemove(formINT); 
        }
        if(!mailReq) {
            console.log(mailReq);
            classRemove(formEM);
        }
        if(!adressReq) {
            console.log(adressReq);
            classRemove(formAT);
        }
        if(!subjectReq) {
            console.log(subjectReq);
            classRemove(formST);
        }

        if(nameReq) {
            classAdd(formINT);
            deactiveElement(formIN);
        }
        if(mailReq){
            classAdd(email);
            deactiveElement(mail);
        }
        if(adressReq) {
            classAdd(formAT);
            deactiveElement(formA);
        }
        if(subjectReq) {
            classAdd(formST);
            deactiveElement(formS);
        }

    }