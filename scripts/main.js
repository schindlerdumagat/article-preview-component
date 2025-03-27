const cardButton = document.querySelector('.card__btn');
const cardButtonDark = document.querySelector('.card__btn--dark');
const cardButtonTablet = document.querySelector('.card__btn--md');
const profileContainer = document.querySelector('.card__profile-container');
const shareContainer = document.querySelector('.card__share');
const profile = document.querySelector('.card__profile');
const shareToolTip = document.querySelector('.card__tooltip');

cardButton.addEventListener("click", () => {
    shareContainer.classList.toggle("hidden");
    profile.classList.toggle("hidden")
    profileContainer.style.padding = "1.375rem 1.875rem";
    profileContainer.style.backgroundColor = "#48556a";
    profileContainer.style.marginTop = "1.875rem";
});

cardButtonDark.addEventListener("click", () => {
    shareContainer.classList.toggle("hidden");
    profile.classList.toggle("hidden");
    profileContainer.style.marginTop = "3rem";
    profileContainer.style.padding = "0";
    profileContainer.style.backgroundColor = "#FFFFFF";
})

cardButtonTablet.addEventListener("click", () => {
    shareToolTip.classList.toggle('visible')
})

