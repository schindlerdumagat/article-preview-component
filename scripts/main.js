const shareButton = document.querySelector(".profile__btn");
const dialog = document.querySelector(".share");

shareButton.addEventListener("click", () => {

    if (dialog.open) {
        dialog.close();
    } else {
        dialog.show();
    }

    updateButtonColor(dialog.open);

});

function updateButtonColor(isOpen) {

    if(isOpen) {
        shareButton.classList.add("profile__btn--open");
    } else {
        shareButton.classList.remove("profile__btn--open");
    }

}