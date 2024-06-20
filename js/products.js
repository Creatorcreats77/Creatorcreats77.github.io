let API_products = [
    {
        number : 0,
        img_a : ["./assets/products/shoe1-3.jpg", "./assets/products/shoe1-2.jpg", "./assets/products/shoe1-3.jpg"],
        name_of_product: "Black Womens coat",
        current_price : 1298,
        about_product  : "Onume eyle beyle suna menzes nesip bolsa gowy bolar "
    },

    {
        number : 1,
        img_a : ["./assets/products/shoe1-2.jpg"],
        name_of_product: "Black Womens coat",
        current_price : 129,
        about_product  : "Onume eyle beyle suna menzes nesip bolsa gowy bolar "    
    },


 ]



let products_list = document.getElementById("products_list");
let product_example; 
let product_widely_example;
let swiper_div;
let swiper_div_adder;


// creating products from API_products
for (let  i = 0; i<API_products.length; i++){
    
    console.log(API_products[i].img_a.length)
    
    
    product_example = 
`
    <div class="row products mini">
        <div class="item item_click">
            <div class="media">
                <div class="thumbnail object-cover">
                    <a href="#">
                        <img src="${API_products[i].img_a[0]}" alt="">
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
function swiper_div_count(a){
    
    for (let i = 0; i<API_products[a].img_a.length; i++){
        let place = API_products[a].img_a[i]
        console.log(place)
     swiper_div = `<div class="swiper-slide"><img src="${place}" alt=""></div>`
        swiper_div_adder += swiper_div;
    }
    

}




product_widely_example =
`
    <b>Balyk tutylyan tor</b>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum laboriosam minima possimus laudantium repellat voluptatum autem illo, hic aspernatur, velit animi saepe neque laborum obcaecati veritatis. Aperiam eius sit ab necessitatibus incidunt laudantium soluta nisi eaque ratione. Alias officia, qui cumque repudiandae, voluptatibus quasi aut impedit, at atque nulla consequuntur.</p>
    <div class="flexwrap_2 flex-end">
    <div class="stars"></div>
    <div><span>0</span> TMT</div>
    </div>
        <div class="buttons_container_2">
    <button class="sms_2"><i class="ri-message-2-fill"></i><span>SMS etmek</span></button>
    <button class="call_2"><i class="ri-phone-fill"></i><span>Jaň etmek</span>    </button>
    </div>
  
`
    products_list.innerHTML +=product_example;
}

function open_close(a){
    let products_main_first = document.getElementById("products_main_first")
   
    let widely_product_content = document.getElementById("widely_product_content")
        products_main_first.classList.remove("open")
        products_main_first.classList.add("hide")
    let product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("hide")
        product_widely.classList.add("open")
        swiper_div_count(a);
        widely_product_content.innerHTML = product_widely_example;
        let wide_projuct_place = document.getElementById("widely_product")
        wide_projuct_place.innerHTML = swiper_div_adder;
}
const items = document.querySelectorAll(".item_click");

for (let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function(){
        open_close(i)
        
    })
}




