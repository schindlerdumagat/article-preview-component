const cardButton = document.querySelector('.card__btn');
const profileContainer = document.querySelector('.card__profile-container');
const shareContainer = document.querySelector('.card__share');
const profile = document.querySelector('.card__profile');
const cardTextContainer = document.querySelector('.card__text');
const shareIcon = document.querySelector('.card__share-icon');

cardButton.addEventListener("click", () => {
    shareContainer.classList.toggle("hidden");
    profile.classList.toggle("hidden")
    if (shareContainer.checkVisibility()) {
        profileContainer.style.padding = "1.375rem 1.875rem";
        profileContainer.style.backgroundColor = "#48556a";
        cardTextContainer.style.marginBottom = "1.875rem";
    } else {
        profileContainer.style.padding = "0 1.875rem 1.125rem";
        profileContainer.style.backgroundColor = "#FFFFFF";
        cardTextContainer.style.marginBottom = "3rem";
    }
})