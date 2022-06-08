function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function changeColor(element, habit_id) {
  let date_id = element.getAttribute("data-date-id");
  console.log(date_id);
  let dates = getCookie(habit_id).split(",");
  console.log(dates);
  if (dates.includes(date_id)) {
    element.setAttribute(
      "class",
      "column has-background-success is-clickable date-box"
    );
  } else {
    return;
  }
}

function colorDates() {
  let dateBoxes = document.querySelectorAll(".date-box");
  console.log(dateBoxes);
  dateBoxes.forEach((el) => changeColor(el, el.getAttribute("data-habit-id")));
}

document.addEventListener("DOMContentLoaded", colorDates);
