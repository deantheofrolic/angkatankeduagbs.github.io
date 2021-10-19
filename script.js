const copyrightYear = document.querySelector(".copyright-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

copyrightYear.innerHTML = currentYear;

