//Document Object model



const openeditbutton = document.querySelector('.edit__button');
const editarea = document.querySelector('.edit__profile-button');
const closeeditarea = document.querySelector('.close__edit-button');
const startanim = document.querySelector('.profile__button-info');
const profiname = document.querySelector('.profile__info-title');
const profinameedit = document.querySelector('.edit__name');
const profistatus = document.querySelector('.edit__second-name');
const editprofibutton = document.querySelector('.save__edit-button');
const profieditsecondname = document.querySelector('.profile__info-subtitle');

function openedit() {
    editarea.classList.add('edit__profile-button_active')
};
function closeedit() {
    editarea.classList.remove('edit__profile-button_active')
};

function editname() {
    profiname.textContent = profinameedit.value
};


function editanim() {
    startanim.classList.add('profile__button-info_active')
};


function editsecondname() {
    profieditsecondname.textContent = profistatus.value
};

profinameedit.value = profiname.textContent;
profistatus.value = profieditsecondname.textContent;

openeditbutton.addEventListener('click', openedit);
closeeditarea.addEventListener('click', closeedit);
openeditbutton.addEventListener('click', editanim);
editprofibutton.addEventListener('click', closeedit);
editprofibutton.addEventListener('click', editname);
editprofibutton.addEventListener('click', editsecondname);




