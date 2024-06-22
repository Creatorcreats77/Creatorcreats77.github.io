
function create_favicon(favicon_adress){
    link = document.createElement('link');
        link.rel = "icon";
        link.href = favicon_adress;
        head_tag = document.getElementsByTagName("head")[0];
        head_tag.appendChild(link)
    }
create_favicon('./Logo_png_7/Png7.yasyl — favicon.png')