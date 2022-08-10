//Document Object model



const openeditbutton = document.querySelector('.edit__button');
const editarea = document.querySelector('.edit__profile-button');
const closeeditarea = document.querySelector('.close__edit');

console.log(editarea)

function openedit() {
    editarea.classList.add('edit__profile-button_active')
};
function closeedit() {
    editarea.classList.remove('edit__profile-button_active')
};

openeditbutton.addEventListener('click', openedit);
closeeditarea.addEventListener('click', closeedit);