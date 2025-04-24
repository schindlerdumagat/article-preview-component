const cardButton = document.querySelector('.card__btn');
const shareDialog = document.querySelector('.card__share-dialog');

cardButton.addEventListener("click", () => {
    if (!shareDialog.open) {
        shareDialog.show();
        cardButton.classList.add('card__btn--active');
    } else {
        shareDialog.close();
        cardButton.classList.remove('card__btn--active');
    }
})

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        shareDialog.close();
        cardButton.classList.remove('card__btn--active');
    }
})