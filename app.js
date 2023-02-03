const popupImg = document.querySelector(".popup-image");

document.querySelectorAll(".pic img").forEach(image => {
    image.onclick = () => {
        popupImg.style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
})

document.querySelector(".popup-image span").onclick = () => {
    popupImg.style.display = "none";
}

document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
        popupImg.style.display = "none"
    }
})

popupImg.addEventListener("click", function (e) {
    if (!e.target.classList.contains("big-img")) {
        popupImg.style.display = "none"
    }
})