// use strice mode on 
    'use strict';

// icon 
    // box-open
        const iconopen = '<i class="fa-solid fa-box-open"></i>'

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
    // Product Page
        // Product Image
            const productIMG = document.querySelector('.productpage--image');
        // Product Spec
            const productSpec = document.querySelector('productpage--spec');
        // Product Description
            const productDes = document.querySelector('.productpage--description');
    // Cart 
        // Cart menu 
            const cartMenu = document.querySelector('.cart--menu');
        // Cart content 
            const cartContect = document.querySelector('.cart--content')
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
    // Cart for this site
        let cartItem = []

// FUNCTION 
// Start up function
 function startUp(){  
 }

// API CALL 
// value1 is End Point of the api url
// value2 is new function 
// value3 is element 
// value4 is the ID 
async function apiRD(value1, value2, value3, value4){

    // Test connect if error catch under. 
    try {
        const respons = await fetch(URL + value1, {
            headers: {
                Authorization: bAuth(apiKey, apiSec)}
        } )
        const result = await respons.json();
        value2(value3, result, value2, value4)

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
    if(path === '/' || path === '/index.html'){
            console.log(path)
            document.title = 'test';
            apiRD(productend, addShowproduct,productpage)
    }
    if(path === '/product.html'){
        apiRD(productend, creatProductpage,productpage);
        

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
        // After fix need filter for the product. 
function addShowproduct(value1, value2){
    // console.log('-- Addproducts --')
    //console.log(value1);
    // console.log(value2)
    let rdObject = value2
    // Am using forEach for adding the products 
    rdObject.forEach(rd => {
        console.log(rd.images[0].src)
       value1.innerHTML += `
        <div class="product" name="Product" onclick="handleRequestClick(event)">
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
                <button class="btn" id="${rd.id}"  name="buy" onclick="handleRequestClick(event, ${rd.id})">Buy</button>
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
        value.classList.add('hidden');   
    }

// Adding Product to intropage
    // Value1 key is open api key 
    // Value2 Secret is the secret key
function bAuth(key, secret) {
    let hash = btoa(key + ':' + secret);
    return 'Basic ' + hash;
}

// CheckID 
    // check the id of the page 
function checkid() {
    const urlSearch = document.location.search
    const url = new URLSearchParams(urlSearch);
    let id = url.get('id');
    return id
}


// Creat Product Page 
    // Value1 is the element need to use 
        // New fix need Multibu element 
    // Value2 is the object from api function
function creatProductpage(value1 , value2){
    // Element1 == productIMG
    // Element2 == productSpec
    // Element3 == productDes
    let itemID = checkid()
    let id = Number(itemID);
    // Need think about make this function
    const index = value2.findIndex((value2) => value2.id === id);
    /*
    productIMG.innerHTML += `
        <img src="${value2[index].images[0].src}" alt="${value2[index].images[0].alt}" />
    `
    productSpec.innerHTML += `
        <h1>
            ${value2[index].name}
        </h1>

    `
    */
}

// Function buy button
    // id 
function buybtn(value1){
    console.log('Buy button click');
    console.log(value1)
    apiRD(productend, addtocart, cartContect, value1);
}

// Adding Image on page
    // Value1 id to image
    // value2 object
    // value3 Need element
    // Value4 is Class 
function addImage(value1, value2, value3, value4){
    const index = value2.findIndex((value2) => value2.id === value1);
    value3.innerHTML += `
        <img src="${value2[index].images[0].src}" alt="${value2[index].image[0].alt}" class="" />
    `
};
// AddtoCart is adding to object
    // value1 is element
    // value2 is the object
function addtocart(value1, value2, value3, value4){
    const index = value2.findIndex((value2) => value2.id === value4)
    Object.assign(cartItem, {id: `${value2[index].id}`, name:`${value2[index].name}`, img:`${value2[index].images[0].src}`, description:`${value2[index].description}`, price:`${value2[index].price}`} );
    
    console.log(cartItem)
}
// Event click 
    // value1 e 
    // value1 id from button
const handleRequestClick = (e, value1) => {
    e.stopPropagation()
    if(e.target.name === 'buy') {
        buybtn(value1);
        
    }
    if(e.target.name === 'Product') {
        console.log('click product');
    }
   
} 

checkpath();
startUp();