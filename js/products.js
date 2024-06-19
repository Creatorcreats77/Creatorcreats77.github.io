let API_products = [
    {
        number : 0,
        img_a : "./assets/products/shoe1-3.jpg",
        name_of_product: "Black Womens coat",
        current_price : 1298,
        about_product  : "Onume eyle beyle suna menzes nesip bolsa gowy bolar "
    },

    {
        number : 1,
        img_a : "./assets/products/shoe1-2.jpg",
        name_of_product: "Black Womens coat",
        current_price : 129,
        about_product  : "Onume eyle beyle suna menzes nesip bolsa gowy bolar "    
    },


 ]



let products_list = document.getElementById("products_list");
let product_example; 



// creating products from API_products
for (let  i = 0; i<API_products.length; i++){

    product_example = 
`
    <div class="row products mini">
        <div class="item">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a href="#">
                        <img src="${API_products[i].img_a}" alt="">
                    </a>
                </div>
            </div>
            <div class="content" >
                <h3 class="main-links"><a href="#">${API_products[i].name_of_product}</a></h3>
                <div class="price">
                    <span class="stars"></span>
                    <span class="current">${API_products[i].current_price}<span class="tmt"> TMT</span></span>
                </div>
                <div class="mini-text">
                    <p>${API_products[i].about_product}</p>
                </div>
                    <div class="buttons_container">
                        <button class="sms"><i class="ri-message-2-fill"></i><span>SMS etmek</span></button>
                        <button class="call"><i class="ri-phone-fill"></i><span>Jaň etmek</span>    </button>
                    </div>
            </div>
        </div>
        <hr>
    </div>
`
products_list.innerHTML +=product_example;
}

function open_close(){
    let products_main_first = document.getElementById("products_main_first")
        products_main_first.classList.remove("open")
        products_main_first.classList.add("hide")
    let product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("hide")
        product_widely.classList.add("open")
}
const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener('click', open_close));
// for (let i = 0; i<items; i++) {
//     items[i].addEventListener("click", function(){
//         console.log(items[i]);
//         let products_main_first = document.getElementById("products_main_first")
//         products_main_first.classList.remove("open")
//         products_main_first.classList.add("hide")
//     })
// }

