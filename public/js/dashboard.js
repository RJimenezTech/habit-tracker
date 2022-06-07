const openModal = document.querySelector('.addBtn');

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