function Yza_gaytmak(){
    wide_projuct_place = document.getElementById("widely_product")
    wide_projuct_place.innerHTML ="";
    widely_product_content = document.getElementById("widely_product_content")
    if(products_main_first.classList.contains("open")){
        window.location.href = "./index.html"
    }
    else{
        products_main_first.classList.remove("hide")
        products_main_first.classList.add("open")
    product_widely = document.getElementById("product_widely")
        product_widely.classList.remove("open")
        product_widely.classList.add("hide")
        swiperr()
    }
        
}


        const list = document.querySelectorAll('.list');
        function activeLink(){
            list.forEach((item) =>
            item.classList.remove('active'));
            this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click' , activeLink));

        let lists = list

for (let i = 0; i < lists.length; i++){
    lists[i].addEventListener("click", function(){
        if (i==0){
            calculate_screenBottom(1)
            
        }
        if (i==1){
            calculate_screenBottom(3)
            
        }
        if (i==2){
            calculate_screenBottom(5)
            // window.location.href= "index.html"
        }
        if (i==3){
            calculate_screenBottom(7)
        }
        if (i==4){
            calculate_screenBottom(9)
            // window.location.href= "index.html"
        }
    })

}

function calculate_screenBottom(a){
    let w = window.innerWidth;
    let h = window.innerHeight;
    console.log(w, h);
    let calculated_indicator = w/5;
    let k = calculated_indicator-calculated_indicator/2;
    let b=k*a
    let d = b-34

    let indicator = document.getElementById("indicator");
    indicator.style.transform =`translateX(${(d)}px)`
}
calculate_screenBottom(5)
