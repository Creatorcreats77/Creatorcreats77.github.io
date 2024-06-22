let API_products = [
    {
        number : 0,
        img_a : ["./img/0.jpg", "./img/0.1.jpg", "./img/0.2.jpg", "./img/0.3.jpg"],
        name_of_product: "Balyk tutulýan tor",
        current_price : 160,
        about_product  : "Balyk Tor. 16 deşikli. Içine iým salyp goýaýmaly. Içine giren balyklar yzyna çykyp bilmeýär. Alana nesip etsin gaty gowy zat! Bahasy 160m Oňuşyk bolar geliberiň"
    },

    {
        number : 1,
        img_a : ["./img/1.jpg", "./img/1.1.jpg", "./img/1.2.jpg"],
        name_of_product: "Bitcoin Moneta",
        current_price : 150,
        about_product  : "Bitcoin Moneta. Suwenir pul hökmünde güýji ýok"    
    },
    {
        number : 2,
        img_a : ["./img/2.jpg", "./img/2.1.jpg", "./img/2.2.jpg"],
        name_of_product: "Kapilka Zalotisty",
        current_price : 100,
        about_product  : "Kapilka Original Lakly. Suw sepseňem hiç zat bolmaýar. Oňuşyk bar"    
    },
    {
        number : 3,
        img_a : ["./img/3.jpg", "./img/3.1.jpg", "./img/3.2.jpg"],
        name_of_product: "Pepelnisa",
        current_price : 70,
        about_product  : "Pepelnisa Suratdaky ýaly bet!"    
    },
    {
        number : 4,
        img_a : ["./img/4.jpg", "./img/4.1.jpg", "./img/4.2.jpg","./img/4.3.jpg","./img/4.4.jpg","./img/4.5.jpg"],
        name_of_product: "Bil oňurga göneldiji",
        current_price : 200,
        about_product  : "Bil Oňurga göneldiji. Yzygiderli maşklaryň netijesinde grižada peýdasy bar. 4 derejede egrilýar. Gaty gowy maslahat berýän!"    
    },
    {
        number : 5,
        img_a : ["./img/5.jpg", "./img/5.1.jpg", "./img/5.2.jpg"],
        name_of_product: "Telefon podstawka",
        current_price : 50,
        about_product  : "Telefon podstawka ýygnalýan ýanyňda götermäge gaty gowy prosta bet!"    
    },


 ]



let products_list = document.getElementById("products_list");
const yyldyz = `<i class="ri-star-fill"></i>`;
let product_example; 
let product_widely_example;
let swiper_div;
let swiper_div_adder;
let widely_product_content;
let product_widely;
let wide_projuct_place;
let head_tag;
let link;


// function add_swiper_min_css(){
//      link = document.createElement('link');
//     link.rel = "stylesheet"
//     link.href = "./css/swiper.min.css"
//      head_tag = document.getElementsByTagName("head")[0]
//     head_tag.appendChild(link)
// }
// function remove_swiper_min_css(){
//     console.log(document.getElementsByTagName("head")[0])
//     head_tag.removeChild(link)
// }

function swiperr(){
    let swiper = new Swiper('.swiper', {
        loop: true,
        pagination : {
            el: '.swiper-pagination',
        },
      }); 
}

function click_item(){
    const items = document.querySelectorAll(".item_click");
for (let i = 0; i < items.length; i++){
    items[i].addEventListener("click", function(){
        open_close(i)
        console.log(i)
        
    })
}
}

// creating products from API_products
for (let  i = 0; i<API_products.length; i++){
    
    // console.log(API_products[i].img_a.length)
    
    
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
                    <p>${API_products[i].about_product.substring(0,98)}...</p>
                </div>
                    <div class="buttons_container">
                    <button class="sms"><i class="ri-message-2-fill"></i><span>SMS etmek</span></button>
                    <button class="call"><i class="ri-phone-fill"></i><span>Jaň etmek</span></button>
                    </div>
            </div>
        </div>
        <hr>
    </div>
`
function swiper_div_count(a){
    
    for (let i = 0; i<API_products[a].img_a.length; i++){
        let place = API_products[a].img_a[i]
        swiper_div = `<div class="swiper-slide"><img src="${place}" alt=""></div>`
        swiper_div_adder = swiper_div;

        wide_projuct_place = document.getElementById("widely_product")
        wide_projuct_place.innerHTML +=swiper_div_adder;



        product_widely_example =
`
    <b>${API_products[a].name_of_product}</b>
    <p>${API_products[a].about_product}</p>
    
    <div class="three_butoons_container">
        <div class="w-100">
            <div class="flexwrap_2 flex-end">
                <div class="stars"></div>
                <div><span>${API_products[a].current_price}</span> TMT</div>
            </div>
            <div class="buttons_container_2">
                <a href="sms:+99364629645;?&body=Salam%20${API_products[a].number}%20belgili%20harydyňyz%20barmy?" class="sms_2"><i class="ri-message-2-fill"></i><span>SMS etmek</span></a>
                <a href="tel:+99364629645" class="call_2"><i class="ri-phone-fill"></i><span>Jaň etmek</span></a>
            </div>
            <div class="center_2"><button  onclick="Yza_gaytmak()" class="yza_gaytmak">Yza Gaýtmak <span><i class="ri-arrow-go-back-line"></i></span></button></div>
        </div>
    </div>
`
    }
    

}



    products_list.innerHTML +=product_example;
    const star= document.querySelectorAll(".stars");
star.forEach((stars) => stars.innerHTML = yyldyz.repeat(5))
}

function open_close(a){
    // remove_swiper_min_css();
    console.log("A inside open close is : " + a)
    let products_main_first = document.getElementById("products_main_first")
   
    widely_product_content = document.getElementById("widely_product_content")
        products_main_first.classList.remove("open")
        products_main_first.classList.add("hide")
    product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("hide")
        product_widely.classList.add("open")
        swiper_div_count(a);
        widely_product_content.innerHTML = product_widely_example;
        const star= document.querySelectorAll(".stars");
        star.forEach((starss) => starss.innerHTML = yyldyz.repeat(5))
        add_swiper_min_css()
        swiperr()

        
}





// HER BLOGY BASYLANDA WIDELY_PROJECT ACYAR






const star= document.querySelectorAll(".stars");
star.forEach((stars) => stars.innerHTML = yyldyz.repeat(5))

function Yza_gaytmak(){
    wide_projuct_place = document.getElementById("widely_product")
    wide_projuct_place.innerHTML ="";
    widely_product_content = document.getElementById("widely_product_content")
        products_main_first.classList.remove("hide")
        products_main_first.classList.add("open")
    product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("open")
        product_widely.classList.add("hide")
        swiperr()

}

// add_swiper_min_css();
swiperr()
click_item()

