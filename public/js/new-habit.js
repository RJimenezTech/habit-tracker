async function newFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector("#new-habit").value.trim();
  console.log(document.session);
  const category = document.querySelector("#habitCategory").value.trim();
  const user_id = 11; // need to extract user_id from session
  console.log(user_id);

  const response = await fetch(`/api/habits`, {
    method: "POST",
    body: JSON.stringify({
      description,
      category,
      user_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".saveHabit").addEventListener("click", newFormHandler);
