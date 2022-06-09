function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 30);
    }
  }
}

function setHabitCookies() {
  let habits = document
    .querySelectorAll("article[data-habit-id]")
    .forEach((el) => {
      if (!getCookie(el.getAttribute("data-habit-id"))) {
        setCookie(el.getAttribute("data-habit-id"));
      }
    });
}

function updateHabitCookie(event) {
  let date_id = event.target.getAttribute("data-date-id");
  let habit_id = event.target.getAttribute("data-habit-id");
  let current = getCookie(habit_id);

  if (current == "undefined") {
    setCookie(habit_id, date_id);
    // location.reload();
  } else {
    let thisCookie = getCookie(habit_id).split(",");
    if (thisCookie.includes(date_id)) {
      const index = thisCookie.indexOf(date_id);
      thisCookie.splice(index, 1);
      thisCookie.join(",");
      setCookie(habit_id, thisCookie);
      //   location.reload();
    } else {
      thisCookie.push(date_id);
      thisCookie.toString();
      setCookie(habit_id, thisCookie);
      //   location.reload();
    }
  }
}

// function storeDateInSession(event) {
//   event.preventDefault();

//   const habit_id = event.target.getAttribute("data-habit-id").toString();
//   const date_id = event.target.getAttribute("data-date-id").toString();

//   console.log(habit_id, date_id);
//   let habitArray = sessionStorage.getItem(habit_id).split(",");
//   console.log(sessionStorage.getItem(habit_id));
//   console.log(habitArray);
//   console.log(habitArray.length);

//   if (habitArray.length === 1 && habitArray[0] === "") {
//     habitArray = [date_id];
//   } else {
//     const index = habitArray.indexOf(date_id);
//     if (index >= 0) {
//       habitArray.splice(index, 1);
//     }
//   }
//   let updatedHabitString = habitArray.join(",");
//   sessionStorage.setItem(habit_id, updatedHabitString);
// }

// function setDateCookie(event) {
//   event.preventDefault();
//   const habit_id = event.target.getAttribute("data-habit-id").toString();
//   const date_id = event.target.getAttribute("data-date-id").toString();

//   let habitArray = document.cookie.split(";");
//   habitArray = habitArray.map((el) => el.replace(" ", ""));
//   console.log(habitArray);

//   const d = new Date();
//   d.setTime(d.getTime( + (1*24*60*60*1000)));
//   let expires = "expires"+ d.toUTCString();
//   document.cookie = habit_id + "=" date_id = ";" + expires + ";path=/"

// }

// function

// function saveHabitsInSessionStorage() {
//   let habits = document
//     .querySelectorAll("article[data-habit-id]")
//     .forEach((el) => {
//       let datesString = "";
//       let habitDates = el
//         .querySelectorAll("div[data-date-id]")
//         .forEach((el) => {
//           if (el.classList.contains("has-background-success")) {
//             datesString += el.getAttribute("data-date-id").toString();
//           }
//           sessionStorage.setItem(el.getAttribute("data-habit-id"), datesString);
//           document.cookie = `${el.getAttribute(
//             "data-habit-id"
//           )}=${el.getAttribute("data-date-id")}`;
//         });
//     });
// }

document.addEventListener("DOMContentLoaded", setHabitCookies);

document.querySelectorAll(".date-box").forEach((box) => {
  box.addEventListener("click", updateHabitCookie);
});
