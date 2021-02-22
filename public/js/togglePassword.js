let tog = 0
let item = document.querySelector("#newPassword")
function togglePassword(){
    if (tog === 0){
        item.setAttribute("type", "text")
        tog = 1
    }
    else if(tog === 1){
        item.setAttribute("type","password")
        tog = 0
    }

}
