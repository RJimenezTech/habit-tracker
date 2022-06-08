async function toggleDateHandler(event) {
  event.preventDefault();

  // const description = document.querySelector('div[id="date-box"]').value.trim();

  const habit_id = parseInt(event.target.getAttribute("data-habit-id"));
  const date = parseInt(event.target.getAttribute("data-date-id"));

  console.log(date, habit_id);

  if (event.target.classList.contains("has-background-danger")) {
    const response = await fetch(`/api/dates/`, {
      method: "POST",
      body: JSON.stringify({
        date: date,
        habit_id: habit_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(await response);
  }

  if (event.target.classList.contains("has-background-grey-light")) {
    const response = await fetch(`/api/dates/`, {
      method: "DELETE",
      body: JSON.stringify({
        date: date,
        habit_id: habit_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(await response);
  }
}

document.querySelectorAll(".date-box").forEach((box) => {
  box.addEventListener("click", toggleDateHandler);
});
