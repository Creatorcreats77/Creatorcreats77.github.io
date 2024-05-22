function Kart_hasaby(){
    let kart =document.getElementById("kart_hasaby");
    kart.style.display="grid"
}
function Toleg_gecirmeli(){   
    let phone_number = document.getElementById("phone_number").value;
    let toleg_moc = document.getElementById("toleg_mocberi").value
    let one = document.getElementById("bir").value
    let two = document.getElementById("iki").value
    let three = document.getElementById("uc").value
    let four = document.getElementById("dort").value
        let tmcells = document.getElementsByClassName("yasyl")
        for (const tmcell of tmcells) {
            if (phone_number.length==12){
                tmcell.style.color = "green"
            } else {
                tmcell.style.color = "red"
            }
            if (toleg_moc>0){
                tmcell.style.color = "green"
            } else {
                tmcell.style.color = "red"
            }
            if (tmcell.style.color == "green" && one != 0 && two !=0 && three != 0&& four !=0){
                alert(toleg_moc + " TMT " + phone_number + " belga  üstünlikli geçirildi")
            }
        }
    
}