const editbutton = document.querySelector('.edit__button');
const profilePopup = document.querySelector('.popup_type_profie');
const profilePopupInfo = document.querySelector('.popup__info_type_profile')
const profilePopupName = document.querySelector('.popup__form-name_type_profile');
const profileName = document.querySelector('.profile__info-header-title');
const profilePopupSecondName = document.querySelector('.popup__form-second-name_type_profile');
const profileSecondName = document.querySelector('.profile__info-subtitle');
const closeProfileButton = document.querySelector('.popup__close_type_profile')
const saveprofileButton = document.querySelector('.popup__save_type_profile')
const addPhotoButton = document.querySelector('.add__photo');
const addPhotoPopup = document.querySelector('.popup_type_photo');
const closeAddPhotoPopup = document.querySelector('.popup__close_type_photo');
const saveAddphotoPopup = document.querySelector('.popup__save_type_photo');
const addphotoPopupinfo = document.querySelector('.popup__info_type_photo');;
const PhotoName = document.querySelector('.popup__form-name_type_photo')
const photoURL = document.querySelector('.popup__form-second-name_type_photo');
const gallery = document.querySelector('.gallery');
let initialCards = [
    {
    name:'Карачевск',
    link:'./pictures/карачевск.png',
    },
    {
    name:'Гора Эльбрус',
    link:'./pictures/Эльбрус.png',
    },
    {
    name:'Домбай',
    link:'./pictures/домбай.png',
    },
    {
    name:'Гора Эльбрус',
    link:'./pictures/Эльбрус.png',
    },
    {
    name:'Домбай',
    link:'./pictures/домбай.png',
    },
    {
    name:'Карачевск',
    link:'./pictures/карачевск.png',
    },
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];





function openPopup(element) {
    element.classList.add('popup_active');
}

function closePopup(element) {
    element.classList.remove('popup_active')
}

function startAnimationPopup(element) {
    element.classList.add('popup__info_active')
}







function photo(initialCardsLink, initialCardsName) {
    const photoTemplate = document.querySelector('#gallary__photo').content;
    const photoContainer = photoTemplate.querySelector('.gallery__photo').cloneNode(true);
    photoContainer.querySelector('.photo__info-title').textContent = initialCardsName;
    photoContainer.querySelector('.photo').setAttribute('src', `${initialCardsLink}`);
    photoContainer.querySelector('.photo').setAttribute('alt', `${initialCardsLink}`);
    gallery.prepend(photoContainer);
    let disabledLikes = photoContainer.querySelectorAll('.photo__grade');
    for (let disabledLike of disabledLikes) {
        disabledLike.addEventListener('click', () => {
            disabledLike.classList.toggle('photo__grade_active');
            console.log('Ты все правильно сделал')
        })
    }

}

for (let initialCard of initialCards ) {
    photo(initialCard.link, initialCard.name)
}





editbutton.addEventListener('click', () => {
    openPopup(profilePopup);
    startAnimationPopup(profilePopupInfo);
    profilePopupName.value = profileName.textContent;
    profilePopupSecondName.value = profileSecondName.textContent;
})


closeProfileButton.addEventListener('click', () => {
    closePopup(profilePopup);
})


saveprofileButton.addEventListener('click', () => {
    closePopup(profilePopup);
    profileName.textContent = profilePopupName.value;
    profileSecondName.textContent = profilePopupSecondName.value;
})


addPhotoButton.addEventListener('click', () => {
    openPopup(addPhotoPopup);
    startAnimationPopup(addphotoPopupinfo);
})


closeAddPhotoPopup.addEventListener('click', () => {
    closePopup(addPhotoPopup);
})


saveAddphotoPopup.addEventListener('click', () => {
    closePopup(addPhotoPopup);
    initialCards.unshift({name: `${PhotoName.value}`, link: `${photoURL.value}`});
    console.log(initialCards)
        photo(initialCards[0].link, initialCards[0].name)
})