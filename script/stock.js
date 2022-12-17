// use Strice 
    'strict'



let category = [
    {
        head: 'climbing jacket',
        img: '../assets/img/RainyDays_Jacket1.png',
        id: '0001'
    },
    {
      head: 'Ski Jacket',
      img:'../assets/img/RainyDays_Jacket6.png',
      id:'0002'
    },
    {
        head: 'Winter Jackets',
        img: '../assets/img/RainyDays_Jacket7.png',
        id: '0003'
    },
    {
        head: 'Training jackets',
        img:'../assets/img/RainyDays_Jacket2.png',
        id: '0004',
    },

]

let product = [
    {
        name:'RD Racing Jacket',
        artnr: '1000',
        arttext: 'The Racing Jacket has a stylish, maritime design and is perfect as an everyday jacket, whether on land or at sea.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket1.png',
    },
    {
        name:'RD Tempest Jacket',
        artnr: '1001',
        arttext: 'Incredibly warm and windproof winter jacket developed for cycling. Perfect for all winter trips, whether training or commuting. Keeps the wind out and the heat in.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket2.png',
    },
    {
        name: 'RD Alpine Jacket',
        artnr: '1002',
        arttext: 'Versatile ski jacket in highly water-repellent and windproof material. Detachable hood protects well against weather and wind.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket3.png',
    },
    {
        name: 'RD Shelter Jacket',
        artnr: '1003',
        arttext: 'warm ski and snowboard anorak with waterproof membrane. Large hood with faux fur on the collar. High neck with brushed fleece lining on the inside provides top comfort.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket4.png',

    },
    {
        name: 'RD Sportswear Windrunner', 
        artnr: '1004',
        arttext: 'Jacket is perfectly suited for runs in light stormy weather.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket5.png',
    },
    {
        name: 'RD Alpine',
        artnr: '1005',
        arttext: 'Jacket is perfect for everyday use and on the ski slopes. Many practical pockets for storing important items.',
        inStock: true,
        price: 1500,
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket6.png',
    }, 
    {
        name: 'RD fleece',
        artnr: '1006',
        arttext: 'Stylish and comfortable fleece vest that keeps you warm on cool days. Fits perfectly both everyday and on trips. Comes with three zippered pockets for storage.',
        inStock: false,
        price: '1500',
        vgroup: '01',
        img: '../assets/img/RainyDays_Jacket7.png',
    }
]

function productShow(){
    
    for(p = 0; p < product.length; p++){

        if(product[p].inStock == true) {
            productSection.innerHTML += `
            <div class="product">
                <div class="product__top">
                    <img src="${product[p].img}" class="img__category">
                </div>
                <div class="product__mid">
                    <h5 class="subHead">
                        ${product[p].name}
                    </h5>
                    <p>
                        ${product[p].arttext}
                    </p>
                </div>
                <div class="product__bot">
                <p class="">
                    Kr ${product[p].price} ,-
                </p>
                <button onclick="rdcart(${product[p].artnr})" class="btn">Buy</button>
                </div>
            </div>
        `
        }
        
    }
    /* 
    for(i=0; i < category.length; i++) {
        console.log(category[i].head , category[i].img);
        productSection.innerHTML += `
            <div>
                <div class="category" onclick="">
                    <div class="top">
                        <img src="${category[i].img}" class="img__category">
                    </div>
                    <div class="bottom">
                        ${category[i].head}
                    </div>
                    
                </div>
            </div>
        `
    }
    */
}

cartValue = [];
let count = 0;
let sum = 0;
function rdcart(artnr){
    let number = artnr;
    console.log(number);
    count++;
    
    const index = product.findIndex((product) => product.artnr == number);
    console.log(index);
   
    sum = sum + product[index].price;
    console.log(product[index].name);

    cartValue.push(`${product[index].artnr}, ${product[index].name}, ${product[index].price},- , }`)
    console.log(cartValue);
    console.log(count)
    console.log(sum);
    cartright.textContent = ""; 
    cartright.innerHTML += `
        <p>
        ${count}
        ${sum} ,-
        </p>
    `
}

function showCart(){
    console.log('hello');

    CartD.classList.toggle('hidden');
    CartD.classList.toggle('active');
    console.log(cartValue);
    for(c=0; c = cartValue.length; c++){
        CartD.innerHTML += `
            <ul>
                <li>
                    ${cartValue[c]}
                </li>
            </ul>
        `
    }
}
productShow();

