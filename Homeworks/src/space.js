const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElements = document.querySelector("main");
const hideButtonElement = document.querySelector("#hideCont-button");
const IS_POINT = "is-point";
const detailsContainer = document.querySelector(".details-container");
const audioElements = document.getElementById("audio");
function showContainer(){
    mainElements.classList.remove("hidden");
    detailsContainer.classList.add(IS_POINT);
    audioElements.play();
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    },2);
    setTimeout(function(){audioElements.pause();},4000);
    audioElements.currentTime = 0;
}
function hideContainer(){
    mainElements.classList.add("hidden");
}
function setDetails(anchor) {
    detailsImage.src = anchor.getAttribute("data-details-image");
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    audioElements.src = anchor.getAttribute("audio-src");
    audioElements.currentTime = 0;
    showContainer();
}
for (let i = 0; i < anchorElements.length; i++){
    anchorElements[i].addEventListener("click", function(){
        setDetails(anchorElements[i]);
    });
}
hideButtonElement.addEventListener("click",hideContainer);