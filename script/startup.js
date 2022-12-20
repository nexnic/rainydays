// use strice mode on 
    'use strict';

// DOM TREE 
    // Header 

    // Loading 
        // Loading Main 
            const loadingBox = document.querySelector('.loading');
        // Loading TXT 
            const loadingtxt = document.querySelector('.loadertxt');
    // Product 
        // Product Section 
            const productpage = document.querySelector('.productShow')
    // Message  
        // Message Main
            const msgBox = document.querySelector('.msg');
        // Message Content 
            const msgtxt = document.querySelector('.msg__content--txt');
    
// API
    // URL 
        const URL = 'https://frontendkenterik.no/Rainyday-API/wp-json/wc/v3';
    // API KEY
        // open key
            const apiKey = 'ck_aea61fe6404d1dbc5f7cbbbf8a24e47965c492da';
        // Secret Key
            const apiSec = 'cs_09deaec89b0db97eeea2c3d82509f2b64fb0c750';
    // End Point 
        // Product 
            const productend = '/products';

// Starting conditions
    // Check page 
        let path = window.location.pathname;
    // bauth 
        let auth = bAuth(apiKey, apiSec);
    // if api is done Default false 
        let callStatus = false;
    // Intererval for check api
        const startInterval = setInterval(checkInterval, 1000);

// FUNCTION 
// Start up function
 function startUp(){  
 }

// API CALL 
async function apiRD(value1){

    // Test connect if error catch under. 
    try {
        const respons = await fetch(URL + value1, {
            headers: {
                Authorization: bAuth(apiKey, apiSec)}
        } )
        const result = await respons.json();
        

    } catch (error) {   
        console.log(error);
    }finally {
        callStatus = true
    }
}

// Check on path
function checkpath(){
    // Check data 
    console.log('-- OnPage --');
    console.log(path);
    if(path === '/index.html'){
            console.log(path)
            document.title = 'test'
    }
}

// SetInterval for the api call
    // value1 is object we are waiting for. 
function checkInterval() {
    console.log('-- check --')
    console.log()
    if(callStatus === true) {
        console.log('-- Test 2 --')
        clearinterval(startInterval);
        closeWindow(loadingBox);
    }
}

// Clear Interval 
    // Value1 is the function need to be clear
function clearinterval(value1){
    console.log('clear Interval')
    clearInterval(value1)
}

// Adding Show product to page 
    // value1 is HTML element to fix it
    // Value2 is temp Object 
function addShowproduct(value1, value2){
    // console.log('-- Addproducts --')
    //console.log(value1);
    // console.log(value2)
    let rdObject = value2
    // Am using forEach for adding the products 
    rdObject.forEach(rd => {
        console.log(rd.images[0].src)
       value1.innerHTML += `
        <div class="product" >
            <div class="product__top">
                <img src="${rd.images[0].src}" class="img__category" alt="${rd.images.alt}"> 
            </div>
            <div class="product__mid">
                <h5 class="subHead">
                    ${rd.name}
                </h5>
                <p>
                    ${rd.description}
                </p>
            </div>
            <div class="product__bot">
                <p class="">
                    Kr ${rd.price} ,-
                </p>
                <button class="btn" id="${rd.id}">Buy</button>
            </div>
        </div>
       ` 
    });    
}

// open pop window
    // Value is the elemten we are going to open
    function openWindow(value) {
        value.classList.remove('hidden');
    }

// closing pop Window
    // Value is the element we need to close
    function closeWindow(value){
        value.classList.add('hidden')
        document.title = 'test'
    }

// Adding Product to intropage

function bAuth(key, secret) {
    let hash = btoa(key + ':' + secret);
    return 'Basic ' + hash;
}





apiRD(productend)
checkpath()
startUp();