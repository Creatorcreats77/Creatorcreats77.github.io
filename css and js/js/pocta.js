function hasapla(){
    console.log("fiihfn")
    let baha = document.getElementById("baha");
let kilo =document.getElementById("kg").value;
let kg= parseInt(kilo.textContent)
let k = (parseInt(kilo)*50);
baha.textContent = k;
}
function Kart_hasaby(){
    let kart =document.getElementById("kart_hasaby");
    kart.style.display="grid"
}
function Toleg_gecirmeli(){   
    let one = document.getElementById("bir").value
    let two = document.getElementById("iki").value
    let three = document.getElementById("uc").value
    let four = document.getElementById("dort").value
    let five = document.getElementById("name").value
    let six = document.getElementById("phone").value
    let seven = document.getElementById("kg").value
            if (one != 0 && two !=0 && three != 0&& four && five != 0 && six !=0 && seven !=0){
                alert(five + "dan " + six + "a poçtaňyz ýakyn wagtda ugradylar" )
            }
        
    
}