const buttoncheck = document.getElementsByClassName("item_congviec_confirm")
for (const item of buttoncheck) {
    item.onclick = ()=>{
        if (item.childElementCount == 0){
            item.innerHTML +='<i class="fa-solid fa-check"></i>'
        }
        else{
            item.innerHTML = ""
        }
    }
}