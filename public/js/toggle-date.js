const req = require("express/lib/request");

async function toggleDateHandler(event) {
  event.preventDefault();

  const description = document.querySelector('div[id="date-box"]').value.trim();

  const habit_id = document
    .querySelector("input[name=habit-description]")
    .getAttribute("data-habit-id");
  const date = document
    .querySelector("input[name=habit-description]")
    .getAttribute("data-date");

  // check if the date gets a response, a good response means that
  // a habit was done on that date and is recorded in the db
  const check_response = await fetch(`/api/dates/${date}/${habit_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if there was no data, add the data
  if (!check_response) {
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
  } else {
    // if there was data, meaning the habit was done on that date already, remove that record
    // so we "turn off" the habit on that date
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
  }

  if (response.ok) {
    alert("date updated!");
  } else {
    alert("unable to update this date at this time!");
    alert(response.statusText);
  }
}

document
  .querySelector(".date-box")
  .addEventListener("click", toggleDateHandler);
