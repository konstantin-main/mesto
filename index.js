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

function openedit() {
    editArea.classList.add('edit__profile-button_active')
};
function closeedit() {
    editArea.classList.remove('edit__profile-button_active')
};

function editname() {
    profiName.textContent = profinameedit.value
};


function editanim() {
    startAnim.classList.add('profile__button-info_active')
};


function editsecondname() {
    profiEditSecondName.textContent = profistatus.value
};

profiNameEdit.value = profiname.textContent;
profiStatus.value = profieditsecondname.textContent;

openEditButton.addEventListener('click', openedit);
closeEditArea.addEventListener('click', closeedit);
openEditButton.addEventListener('click', editanim);
editProfiButton.addEventListener('click', closeedit);
editProfiButton.addEventListener('click', editname);
editProfiButton.addEventListener('click', editsecondname);




