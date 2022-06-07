async function newFormHandler(event) {
  event.preventDefault();

  const description = document.querySelector("#new-habit").value.trim();
  const category = document.querySelector("#habitCategory").value.trim();
  console.log(description, category);

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
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".saveHabit").addEventListener("click", newFormHandler);
