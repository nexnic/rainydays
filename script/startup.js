// use strice mode on 
    'use strict';

// DOM TREE 
    // Header 

    // Loading 
        // Loading Main 
            const loadingBox = document.querySelector('#loading');
        // Loading TXT 
            const loadingtxt = document.querySelector('#loadertxt');
    // Product 
            // Product Section 
                const productpage = document.querySelector('.productShow')
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

// Startup Value 
    // Check page 
        let path = window.location.pathname;
    // bauth 
        let auth = bAuth(apiKey, apiSec);



// FUNCTION 

// Start up function
 function startUp(){
    checkpath()
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
        addShowproduct(productpage, result)
        console.log(result);
    } catch (error) {   
        console.log(error);
    }
}

// Check on path
function checkpath(){
    // Check data 
    console.log('-- OnPage --');
    console.log(path);
    if(path === '/index.html'){
            
    }
}

// Adding Show product to page 
    // value1 is HTML element to fix it
    // Value2 is temp Object 
function addShowproduct(value1, value2){
    // console.log('-- Addproducts --')
    console.log(value1);
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

// Adding Product to intropage

function bAuth(key, secret) {
    let hash = btoa(key + ':' + secret);
    return 'Basic ' + hash;
}





apiRD(productend)
checkpath()