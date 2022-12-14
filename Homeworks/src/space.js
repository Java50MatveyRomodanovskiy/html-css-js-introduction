const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElements = document.querySelector("main");
const hideButtonElement = document.querySelector("#hideCont-button")
function showContainer(){
    mainElements.classList.remove("hidden");
}
function hideContainer(){
    mainElements.classList.add("hidden");
}
function setDetails(anchor) {
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    showContainer();
}
for (let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    });
}
hideButtonElement.addEventListener("click",hideContainer);