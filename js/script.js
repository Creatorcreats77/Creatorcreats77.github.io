
// show mobile menu 
const menuButton = document.querySelector(".trigger"),
    closeButton = document.querySelector(".t-close"),
    overlay = document.getElementById("overlay"),
    addclass = document.querySelector('.site');

menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
    overlay.style.visibility = 'inherit';
    overlay.style.opacity = 1;
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove("showmenu")
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = 0;
})

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

const searchButton = document.querySelector(".t-search"),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');

searchButton.addEventListener("click", function(){
    showClass.classList.toggle("showsearch")
})
tClose.addEventListener("click", function(){
    showClass.classList.remove("showsearch")
})

