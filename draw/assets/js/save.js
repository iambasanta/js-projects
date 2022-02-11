const saveButton = document.querySelector(".save");
saveButton.addEventListener("click", saveImage);

function saveImage() {
    var image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    window.location.href = image;
}
