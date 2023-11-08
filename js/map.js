function onMouseEnter(data){
    let element = document.querySelector(`.map-element-tracker-mask path[data="${data}"]`);
    element.style.fill = "#FFCB56";
}
function onMouseLeave(data){
    let element = document.querySelector(`.map-element-tracker-mask path[data="${data}"]`);
    element.style.fill = "#384BA9";
}