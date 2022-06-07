const saveHabit = document.querySelector('.saveHabit');

async function newFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector("#new-habit").value.trim();
  const category = document.querySelector("#habitCategory").value.trim();
  const confirm = document.querySelector('.confirm');

  console.log(description, category);

  if (description && category) {
    const response = await fetch(`/api/habits`, {
    method: "POST",
    body: JSON.stringify({
      description,
      category,
      //   user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    });
    
    if (response.ok) {
      document.location.replace("/dashboard");

      confirm.classList.remove('hidden');
      confirm.classList.add('has-text-success');
      confirm.innerHTML = `Habit saved<i class="fa-solid fa-circle-check ml-2 is-size-5"></i>`;

    }
    else {
      confirm.classList.remove('hidden');
      confirm.classList.add('has-text-danger');
      confirm.innerHTML = `Error saving habit<i class="fa-solid fa-circle-xmark ml-2 is-size-5"></i>`
      console.log(response.statusText);
    }
  } else {
      confirm.classList.remove('hidden');
      confirm.classList.add('has-text-danger');
      confirm.innerHTML = `Enter a valid habit<i class="fa-solid fa-circle-exclamation ml-2 is-size-5"></i>`
  }

}

saveHabit.addEventListener("click", newFormHandler);
