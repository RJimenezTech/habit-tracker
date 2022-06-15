function categoryColor(element) {
  let category = element.getAttribute("data-cat");

  if (category === "mental") {
    element.setAttribute(
      "class",
      "columns is-multiline is-mobile rounded has-shadow"
    );
    element.setAttribute("style", "background-color:#F1D5DA");
    element.setAttribute("style", "background-color:#F1D5DA");
  } else if (category === "physical") {
    element.setAttribute(
      "class",
      "columns is-multiline is-mobile rounded has-shadow"
    );
    element.setAttribute("style", "background-color:#D4C1EC");
  } else if (category === "productivity") {
    element.setAttribute(
      "class",
      "columns is-multiline is-mobile rounded has-shadow"
    );
    element.setAttribute("style", "background-color:#C3E5AE");
  } else {
    element.setAttribute(
      "class",
      "columns is-multiline is-mobile rounded has-shadow has-background-info"
    );
  }
}

function assignColor() {
  let habit_categories = document.querySelectorAll(".habit-category");
  habit_categories.forEach((el) => categoryColor(el));
}

document.addEventListener("DOMContentLoaded", assignColor);
