const req = require("express/lib/request");

async function editFormHandler(event) {
  event.preventDefault();

  const description = document
    .querySelector('input[name="habit-description"]')
    .value.trim();

  const id = document
    .querySelector("input[name=habit-description]")
    .getAttribute("data-habit-id");

  const response = await fetch(`/api/habits/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("habit updated!"); // only temporary response, until we get a display
  } else {
    alert("unable to edit the habit at this time!"); // only temporary response, until we get a display
    alert(response.statusText);
  }
}

document
  .querySelector(".habit-description")
  .addEventListener("blur", editFormHandler);
