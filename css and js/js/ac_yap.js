let oy = document.getElementById("Oy_ucin");
        let navbar_oy = document.getElementById("Oy_ucin_navbar");
        let close_of = document.getElementById("close")
        let a = 0;
        function ac_yap(){
            if (a==0){
                navbar_oy.style.display = "block"
                a=1;
                clickler();
            }
        }
        function ac(){
            if (a==1){
                navbar_oy.style.display = "none"
                a=0
                clickler()
            }
        }
        function clickler(){
            if (a==0){
                oy.addEventListener('click', function(){
                ac_yap();
        });
            }
            if (a==1){
                oy.addEventListener('click', function(){
                ac();
        });
            }
        }
        clickler();