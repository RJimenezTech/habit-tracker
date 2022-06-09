const deleteAccount = document.querySelector(".delete-acc");

async function deleteAccountHandler() {

    const id = deleteAccount.getAttribute("data-user-id");
    console.log(id);

    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

deleteAccount.addEventListener("click", deleteAccountHandler);