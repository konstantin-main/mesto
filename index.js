//Document Object model



const openEditButton = document.querySelector('.edit__button');
const editArea = document.querySelector('.edit__profile-button');
const closeEditArea = document.querySelector('.close__edit-button');
const startAnim = document.querySelector('.profile__button-info');
const profiName = document.querySelector('.profile__info-title');
const profiNameEdit = document.querySelector('.edit__name');
const profiStatus = document.querySelector('.edit__second-name');
const editProfiButton = document.querySelector('.save__edit-button');
const profiEditSecondName = document.querySelector('.profile__info-subtitle');

function openEdit() {
    editArea.classList.add('edit__profile-button_active')
};
function closeEdit() {
    editArea.classList.remove('edit__profile-button_active')
};

function editName() {
    profiName.textContent = profiNameEdit.value
};


function editAnim() {
    startAnim.classList.add('profile__button-info_active')
};


function editSecondName() {
    profiEditSecondName.textContent = profiStatus.value
};

profiNameEdit.value = profiName.textContent;
profiStatus.value = profiEditSecondName.textContent;

openEditButton.addEventListener('click', openEdit);
closeEditArea.addEventListener('click', closeEdit);
openEditButton.addEventListener('click', editAnim);
editProfiButton.addEventListener('click', closeEdit);
editProfiButton.addEventListener('click', editName);
editProfiButton.addEventListener('click', editSecondName);




