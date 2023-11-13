// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const content = document.querySelector('.content');
const cardList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardTitle, cardImage, deletedCard) {

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    cardElement.querySelector('.card__title').textContent = cardTitle;
    cardElement.querySelector('.card__image').src = cardImage;

    const deleteButton = cardElement.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', (evt) => {
            deletedCard(evt);
        });
        return cardElement;
};

// @todo: Функция удаления карточки
const deleteCard = (event) => {
    const item = event.target.closest('.card');
    item.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function ({name, link}) {
    const cardData = createCard(name, link, deleteCard);
    cardList.append(cardData);
});