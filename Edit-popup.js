//Document Object model
const openEditButton = document.querySelector('.edit__button');
const editArea = document.querySelector('.edit__profile-popup');
const closeEditArea = document.querySelector('.close__profile-popup');
const startAnimation = document.querySelector('.profile__popup-info');
const profileName = document.querySelector('.profile__info-header-title');
const profileNameEdit = document.querySelector('.profile__popup-name');
const profileStatus = document.querySelector('.profile__popup-second-name');
const editProfileButton = document.querySelector('.save__profile-popup');
const profileEditSecondName = document.querySelector('.profile__info-subtitle');






function openEdit() {
    editArea.classList.add('edit__profile-popup_active');
    profileNameEdit.value = profileName.textContent;
    profileStatus.value = profileEditSecondName.textContent;
};
function closeEdit() {
    editArea.classList.remove('edit__profile-popup_active')
};

function editName() {
    profileName.textContent = profileNameEdit.value
};


function editAnimation() {
    startAnimation.classList.add('profile__popup-info_active')
};


function editSecondName() {
    profileEditSecondName.textContent = profileStatus.value
};







openEditButton.addEventListener('click', () => {
    openEdit();
    editAnimation();

});
closeEditArea.addEventListener('click', closeEdit);
editProfileButton.addEventListener('click', () => {
    editName();
    editSecondName();
    closeEdit();
});




const addPhotoButton = document.querySelector('.add__photo');
const addPhotoPopup = document.querySelector('.add__photo-popup');
const closePhotoPopup = document.querySelector('.close__add_photo-popup');




closePhotoPopup.addEventListener('click', () => {
    saveAddition()
});

addPhotoButton.addEventListener('click', () => {
    openAddition()
});


function openAddition() {
    const addPhotoPopupInfo = document.querySelector('.add__photo-popup-info');
    addPhotoPopup.classList.add('add__photo-popup_active');
    addPhotoPopupInfo.classList.add('add__photo-popup-info_active')
};


const gallery = document.querySelector('.gallery');
const saveAddButton = document.querySelector('.save__add__photo-popup');
const disabledLikes = document.querySelectorAll('.photo__grade');



saveAddButton.addEventListener('click', () => {
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



for ( const disabledLike of disabledLikes) {
    disabledLike.addEventListener('click', () => {
        disabledLike.classList.toggle('photo__grade_active')
    });
};






