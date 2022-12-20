// use strice mode on 
    'use strict';

// DOM TREE 
    // Header 

    // Loading 
        // Loading Main 
            const loadingBox = document.querySelector('#loading');
        // Loading TXT 
            const loadingtxt = document.querySelector('#loadertxt');

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

        console.log(result);
    } catch (error) {   
        console.log(error);
    }
}


// Adding Product to intropage

function bAuth(key, secret) {
    let hash = btoa(key + ':' + secret);
    return 'Basic ' + hash;
}



    let auth = bAuth(apiKey, apiSec);


// Startup 

apiRD(productend)