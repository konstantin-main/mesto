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
const PhotoName = document.querySelector('.popup__form-name_type_photo');
const photoURL = document.querySelector('.popup__form-second-name_type_photo');
const closeAddPhotoPopup = document.querySelector('.popup__close_type_photo');
const saveAddphotoPopup = document.querySelector('.popup__save_type_photo');
const addphotoPopupinfo = document.querySelector('.popup__info_type_photo');;
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
const galleryTemplate = document.querySelector('#gallary__photo').content;
const photoContainer = galleryTemplate.querySelector('.gallery__photo').cloneNode(true);
let photos = photoContainer.querySelector('.photo');
let disabledLikes = photoContainer.querySelectorAll('.photo__grade');
let PhotoTitle = photoContainer.querySelector('.photo__info-title');
let body =document.querySelector('.root')







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
    const galleryTemplate = document.querySelector('#gallary__photo').content;
    const photoContainer = galleryTemplate.querySelector('.gallery__photo').cloneNode(true);
    let photos = photoContainer.querySelector('.photo');
    let disabledLikes = photoContainer.querySelectorAll('.photo__grade');
    let PhotoTitle = photoContainer.querySelector('.photo__info-title');
    let removePhoto = photoContainer.querySelector('.remove__photo');
    removePhoto.addEventListener('click', () => {
        photoContainer.remove();
    })
    PhotoTitle.textContent = initialCardsName;
    photos.setAttribute('src', `${initialCardsLink}`);
    photos.setAttribute('alt', `${initialCardsName}`);
    gallery.prepend(photoContainer);
    for (let disabledLike of disabledLikes) {
        disabledLike.addEventListener('click', () => {
            disabledLike.classList.toggle('photo__grade_active');
            console.log('Ты все правильно сделал')
        })
    };
    photos.addEventListener('click', (element) => {
        increasePhoto(photos.src, photos.alt);
    })
    
}



initialCards.forEach( function(initialCards) {
    photo(initialCards.link, initialCards.name)
});


function increasePhoto(photoMeaning, photoNaming) {
    const photoTemplate = document.querySelector('#popup__type_increase-photo').content;
    const popupTypePhoto = photoTemplate.querySelector('.popup__type_increase-photo').cloneNode(true);
    let bigPhoto = popupTypePhoto.querySelector('.popup__type_increase-photo-image');
    let bigPhototitle = popupTypePhoto.querySelector('.popup__type_increase-photo-title');
    bigPhoto.src = photoMeaning;
    bigPhototitle.textContent = photoNaming;
    popupTypePhoto.addEventListener('click', () => {
        popupTypePhoto.remove();
    })
    console.log(popupTypePhoto)
    body.append(popupTypePhoto);


};


photos.addEventListener('click',  (event)=> {
    console.log(event.target)
})


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
    PhotoName.value = '';
    photoURL.value = '';
    console.log(PhotoName.value, photoURL.value);
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


function validation() {
    const formTypePhoto = document.querySelector('.popup__form_type_photo');
    formTypePhoto.addEventListener('click', (evt) => {
        let formError = formTypePhoto.querySelector(`.${evt.target.id}-error`)
        evt.target.addEventListener('input', () => {
            if(!evt.target.valid) {
                formError.classList.add(`${evt.target.id}-error_active`);
                formError.textContent = evt.target.validationMessage;
            }
            })
    })
}
validation()



