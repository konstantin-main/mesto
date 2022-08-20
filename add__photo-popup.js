const addPhotoButton = document.querySelector('.add__photo');
const addPhotoPopup = document.querySelector('.add__photo-popup');

addPhotoButton.addEventListener('click', () => {
    openAddition()
})


function openAddition() {
    const addPhotoPopupInfo = document.querySelector('.add__photo-popup-info');
    addPhotoPopup.classList.add('add__photo-popup_active');
    addPhotoPopupInfo.classList.add('add__photo-popup-info_active')
}


const gallery = document.querySelector('.gallery');
const closeAddButton = document.querySelector('.save__add__photo-popup')



closeAddButton.addEventListener('click', () => {
    let addUrl = document.querySelector('.add__photo-popup-second-name');
    let addNamepost = document.querySelector('.add__photo-popup-name');
    gallery.insertAdjacentHTML('afterBegin', `
    <div class="gallery__photo">
        <img src="${getUrl(addUrl)}" alt="Karachevsk" class="photo">
        <div class="photo__info">
            <h2 class="photo__info-title">${getNamePost(addNamepost)}</h2>
            <div class="photo__grade"></div>
        </div>
    </div>`);
    saveAddition()
    addUrl.value =''
})

function saveAddition() {
    addPhotoPopup.classList.remove('add__photo-popup_active');
}


function getUrl(element) {
    let newUrl = element.value;
    return newUrl;
}

function getNamePost(element) {
    let newNamePost = element.value;
    return newNamePost;
}