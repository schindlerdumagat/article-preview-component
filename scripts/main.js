const shareButton = document.querySelector(".card__btn");
const dialog = document.querySelector(".share");

shareButton.addEventListener("click", () => {

    if (dialog.open) {
        dialog.close();
    } else {
        dialog.show();
    }

})