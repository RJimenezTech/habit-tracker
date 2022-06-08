async function toggleDateHandler(event) {
  event.preventDefault();

  // const description = document.querySelector('div[id="date-box"]').value.trim();

  const habit_id = event.target.getAttribute("data-habit-id");
  const date = event.target.getAttribute("data-date");

  console.log(date, habit_id);

  // check if the date gets a response, a good response means that
  // a habit was done on that date and is recorded in the db
  const check_response = await fetch(`/api/dates/${date}/${habit_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(check_response);

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

  console.log(response);
  //   if (!response.ok) {
  //     alert("date updated!");
  //   } else {
  //     const response = await fetch(`/api/dates/`, {
  //       method: "DELETE",
  //       body: JSON.stringify({
  //         date: date,
  //         habit_id: habit_id,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     alert("date removed!");
  //   }
}

document.querySelectorAll(".date-box").forEach((box) => {
  box.addEventListener("click", toggleDateHandler);
});
