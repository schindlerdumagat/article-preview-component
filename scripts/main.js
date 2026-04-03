const shareButton = document.querySelector(".profile__btn");
const shareOptions = document.querySelector(".share");

// Opens and closes the popover UI when clicking the button
shareButton.addEventListener("click", () => {

    const isOpen = shareOptions.hasAttribute("data-open");

    shareOptions.toggleAttribute("data-open");
    shareButton.classList.toggle("profile__btn--open");
    
    shareButton.setAttribute("aria-label", isOpen ? "Open share options" : "Close share options")
    shareButton.setAttribute("aria-expanded", String(!isOpen));
});

// Closes the popover UI when clicking other things aside from the button and popover UI
document.addEventListener("click", (e) => {

    const isClickInside = shareButton.contains(e.target) || shareOptions.contains(e.target);

    if (!isClickInside) {
        closeShareOptions()
    }

});

// Closes the popover UI when pressing the escape key
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeShareOptions()
    }

});

function closeShareOptions() {
    shareOptions.removeAttribute("data-open");
    shareButton.classList.remove("profile__btn--open");
    shareButton.setAttribute("aria-expanded", "false");
    shareButton.setAttribute("aria-label", "Open share options");
}