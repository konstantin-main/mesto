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
const disabledLikes = document.querySelectorAll('.photo__grade');








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




for ( const disabledLike of disabledLikes) {
    disabledLike.addEventListener('click', () => {
        disabledLike.classList.toggle('photo__grade_active')
    });
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




