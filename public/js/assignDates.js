function getPreviousSunday(date = new Date()) {
  const previousMonday = new Date();

  previousMonday.setDate(date.getDate() - date.getDay());

  return previousMonday;
}

const getFormattedDate = (date) => {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return yyyy + mm + dd;
};

const assignDates = () => {
  const sunday = getPreviousSunday(new Date());
  const sundayFormatted = getFormattedDate(sunday);

  const monday = new Date(sunday);
  monday.setDate(monday.getDate() + 1);
  const mondayFormatted = getFormattedDate(monday);

  const tuesday = new Date(monday);
  tuesday.setDate(tuesday.getDate() + 1);
  const tuesdayFormatted = getFormattedDate(tuesday);

  const wednesday = new Date(tuesday);
  wednesday.setDate(wednesday.getDate() + 1);
  const wednesdayFormatted = getFormattedDate(wednesday);

  const thursday = new Date(wednesday);
  thursday.setDate(thursday.getDate() + 1);
  const thursdayFormatted = getFormattedDate(thursday);

  const friday = new Date(thursday);
  friday.setDate(friday.getDate() + 1);
  const fridayFormatted = getFormattedDate(friday);

  const saturday = new Date(friday);
  saturday.setDate(saturday.getDate() + 1);
  const saturdayFormatted = getFormattedDate(saturday);

  document.querySelectorAll(".date-box").forEach((el) => {
    if (el.getAttribute("class").includes("day1")) {
      el.setAttribute("data-date-id", sundayFormatted);
    } else if (el.getAttribute("class").includes("day2")) {
      el.setAttribute("data-date-id", mondayFormatted);
    } else if (el.getAttribute("class").includes("day3")) {
      el.setAttribute("data-date-id", tuesdayFormatted);
    } else if (el.getAttribute("class").includes("day4")) {
      el.setAttribute("data-date-id", wednesdayFormatted);
    } else if (el.getAttribute("class").includes("day5")) {
      el.setAttribute("data-date-id", thursdayFormatted);
    } else if (el.getAttribute("class").includes("day6")) {
      el.setAttribute("data-date-id", fridayFormatted);
    } else if (el.getAttribute("class").includes("day7")) {
      el.setAttribute("data-date-id", saturdayFormatted);
    }
  });
};

document.addEventListener("DOMContentLoaded", assignDates);
