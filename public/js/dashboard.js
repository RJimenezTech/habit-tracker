const openModal = document.querySelector('.addBtn');
const dateBox = document.querySelectorAll('div.date-box');

openModal.addEventListener('click', () => {
    const addHabit = document.querySelector('.addHabit');
    const closeModal = document.querySelector('.delete');
    const confirm = document.querySelector('.confirm');

    addHabit.classList.remove('modal');

    addHabit.classList.add('modal-is-active');

    closeModal.addEventListener('click', () => {

        addHabit.classList.remove('modal-is-active');

        addHabit.classList.add('modal');

    });
});

dateBox.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('has-background-success');
        box.classList.toggle('has-background-grey-light');
    });
})