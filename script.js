const button_info = document.getElementsByClassName("button_info")[0]
const menu_button_info = document.getElementsByClassName("button_info-detail")[0]
button_info.onclick=()=>{
    menu_button_info.classList.toggle("button_info-detail-hidden")
}