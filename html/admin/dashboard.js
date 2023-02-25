//---------------------------------
let ordertab = document.getElementById('order')
let producttab = document.getElementById('product')
let customertab = document.getElementById('customer')
let paymenttab = document.getElementById('payment')
let orderbutton = document.getElementById('orderbutton')
let productbutton = document.getElementById('productbutton');
let customerbutton = document.getElementById('customerbutton')
let paymentbutton = document.getElementById('paymentbutton')
let orderfilter = document.getElementById('orderfilter');
let productfilter = document.getElementById('productfilter');
let customerfilter = document.getElementById('customerfilter');
let paymentfilter = document.getElementById('paymentfilter')
let orderdiv = document.querySelector('#left_admininfo>:nth-child(1)');
let productAddOrUpdatebutton = document.getElementById('inputform_submitbutton');
// product page input tags 
let productname = document.getElementById('productname');
let productimg = document.getElementById("productimg");
let productweight = document.getElementById('productweight');
let producttype = document.getElementById('producttype');
let productpurity = document.getElementById('productpurity')
// checkbox is checked or not ;
let postrequest = document.getElementById('post');
let putrequest = document.getElementById('put')


let productdatashow = document.getElementById('productdatashow');
//-----------------------------------
// ordertab.style.display = 'none'
// producttab.style.display = 'none'
// customertab.style.display = 'none'
// paymenttab.style.display = 'none'

// will make order span in purple to show it acitve;
 if(screen.width<480){
    orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '10px'
    console.log('h')
 }else {
    orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '18px'
 }
 //console.log(screen.width<440)
orderbutton.addEventListener('click',()=>{
    ordertab.style.display = 'block'
    producttab.style.display = 'none'
    customertab.style.display = 'none'
    paymenttab.style.display = 'none'
    orderfilter.value = '';
    if(screen.width<480){
        orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '12px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
     }else {
        orderbutton.style.color = 'rgb(204, 49, 204)'
    orderbutton.style.fontSize = '18px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '16px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
     }
    
    console.log('order')
})

productbutton.addEventListener('click',()=>{
    fetchandgetdata()
    producttab.style.display = 'block'
    ordertab.style.display = 'none'
    customertab.style.display = 'none'
    paymenttab.style.display = 'none'
    productfilter.value = '';
    if(screen.width<480){
     productbutton.style.color = 'rgb(204, 49, 204)'
    productbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
     }else {
        productbutton.style.color = 'rgb(204, 49, 204)'
    productbutton.style.fontSize = '18px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '16px'
     }
    
        console.log('product')
})


customerbutton.addEventListener('click',()=>{
    fetchandgetdatacustomer();
    customertab.style.display = 'block'
    ordertab.style.display = 'none'
    producttab.style.display = 'none'
    paymenttab.style.display = 'none'
    customerfilter.value = '';
    if(screen.width<480){
        customerbutton.style.color = 'rgb(204, 49, 204)'
    customerbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '10px'
     }else {
        customerbutton.style.color = 'rgb(204, 49, 204)'
    customerbutton.style.fontSize = '18px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '16px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '16px'
    paymentbutton.style.color = 'black'
    paymentbutton.style.fontSize = '16px'
     }
    
        console.log('customer')
})


paymentbutton.addEventListener('click',()=>{
    paymenttab.style.display = 'block'
    ordertab.style.display = 'none'
    producttab.style.display = 'none'
    customertab.style.display = 'none'
    paymentfilter.value = ""
    if(screen.width<480){
        paymentbutton.style.color = 'rgb(204, 49, 204)'
    paymentbutton.style.fontSize = '12px'
    orderbutton.style.color = 'black'
    orderbutton.style.fontSize = '10px'
    productbutton.style.color = 'black'
    productbutton.style.fontSize = '10px'
    customerbutton.style.color = 'black'
    customerbutton.style.fontSize = '10px'
     }else {
        paymentbutton.style.color = 'rgb(204, 49, 204)'
        paymentbutton.style.fontSize = '18px'
        orderbutton.style.color = 'black'
        orderbutton.style.fontSize = '16px'
        productbutton.style.color = 'black'
        productbutton.style.fontSize = '16px'
        customerbutton.style.color = 'black'
        customerbutton.style.fontSize = '16px'
     }
    
        console.log('payment')
})


// // Get the screen width and height
// var screenWidth = screen.width;
// var screenHeight = screen.height;

// // Display the screen size in the console
// console.log("Screen width: " + screenWidth + "px");
// console.log("Screen height: " + screenHeight + "px");

productAddOrUpdatebutton.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(postrequest.checked,putrequest.checked)
    if(postrequest.checked) {
        // we will do the post reqeust to server
        console.log('post')
    } else if(putrequest.checked){
        // we will do the put request ;
        console.log('put')
    }
    
})

async function fetchandgetdata() {
    let req = await fetch(`https://diamond-xuwq.onrender.com/Product?adminId=35`)
    let data = await req.json();
    console.log(data);
    getcards(data)
}

//fetchandgetdata()


function getcards(data) {
    let cards = data.map((ele)=>{
        return getcard(ele.id,ele.name)
    }).join('')
    productdatashow.innerHTML = cards;
}

function getcard(name) {
     let inventory = Math.floor(Math.random()*99)
    let avavlity = ''; 
    if(inventory<25) {
        avavlity = "Low"
    }else{
        avavlity = "High"
    }
    let  card = `
    <tr class="trows">
    <td>${name}</td>
    <td>Published</td>
    <td>${avavlity}</td>
    <td>${inventory}</td>
    <td>Edit</td>
</tr>
    `
    return card;
}


async function fetchandgetdatacustomer() {
    let req = await fetch(`https://diamond-xuwq.onrender.com/Product?adminId=35`)
    let data = await req.json();
    console.log(data);
    getcards(data)
}

fetchandgetdatacustomer()