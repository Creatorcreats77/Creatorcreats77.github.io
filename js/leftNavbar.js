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

function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove("expand") : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}



