
// show mobile menu 
// const menuButton = document.querySelector(".trigger"),
//     closeButton = document.querySelector(".t-close"),
//     overlay = document.getElementById("overlay"),
//     addclass = document.querySelector('.site');

// menuButton.addEventListener('click', function(){
//     addclass.classList.toggle('showmenu')
//     overlay.style.visibility = 'inherit';
//     overlay.style.opacity = 1;
// })
// closeButton.addEventListener('click', function(){
//     addclass.classList.remove("showmenu")
//     overlay.style.visibility = 'hidden';
//     overlay.style.opacity = 0;
// })

// show sub menu on mobile
const submenu  = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove("expand") : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}


// const sswiper = new Swiper('.swiper', {
//     loop: true,
//     pagination : {
//         el: '.swiper-pagination',
//     },
//   });   

// const yyldyz = `<i class="ri-star-fill"></i>`;
// const star= document.querySelectorAll(".stars");
// star.forEach((stars) => stars.innerHTML = yyldyz.repeat(5))

// const searchButton = document.querySelector(".t-search"),
//     tClose = document.querySelector('.search-close'),
//     showClass = document.querySelector('.site');

// searchButton.addEventListener("click", function(){
//     showClass.classList.toggle("showsearch")
// })
// tClose.addEventListener("click", function(){
//     showClass.classList.remove("showsearch")
// })




// let lists = document.querySelectorAll(".list");
// for (let i = 0; i < lists.length; i++){
//     lists[i].addEventListener("click", function(){
//         if (i==0){
//             calculate_screenBottom(1)
//         }
//         if (i==1){
//             calculate_screenBottom(3)
//         }
//         if (i==2){
//             calculate_screenBottom(5)
//         }
//         if (i==3){
//             calculate_screenBottom(7)
//         }
//         if (i==4){
//             calculate_screenBottom(9)
//         }
//     })

// }

// function calculate_screenBottom(a){
//     let w = window.innerWidth;
//     let h = window.innerHeight;
//     console.log(w, h);
//     let calculated_indicator = w/5;
//     let k = calculated_indicator-calculated_indicator/2;
//     let b=k*a
//     let d = b-34

//     let indicator = document.getElementById("indicator");
//     indicator.style.transform =`translateX(${(d)}px)`
// }
// calculate_screenBottom(1)
