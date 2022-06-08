const deleteModal = document.querySelector('.deleteBtn');

deleteModal.addEventListener('click', () => {
    const deleteHabit = document.querySelector('.deleteHabit');
    const closeModal = document.querySelector('.close-delete');
    const cancel = document.querySelector('.cancelBtn');

   deleteHabit.classList.remove('modal');

   deleteHabit.classList.add('modal-is-active');

    closeModal.addEventListener('click', () => {

        deleteHabit.classList.remove('modal-is-active');

        deleteHabit.classList.add('modal');

    });

    cancel.addEventListener('click', () => {

        deleteHabit.classList.remove('modal-is-active');

        deleteHabit.classList.add('modal');

    });
});

