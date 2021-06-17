/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// Set variables for amount of items to display per page.
const itemsPerPage = 9;

// Create showPage function to take in a list of data and display a page of that data.
// Function creates a starting and ending index that displays specific data based on
// the page that is being displayed. We then select our student list class and reset
// the innerHTML. A for loop is then used to look at the data that we have passed
// as a parameter and then creates a new HTML string with template literals to build a
// card out of that data. This data is then inserted into our student list class.
function showPage(list, page) {
  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let html = ``;
    if (i >= startIndex && i < endIndex) {
      html += `
            <div class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </div>
         `;
    }
    studentList.insertAdjacentHTML("afterbegin", html);
  }
}

// Created addPagination function that will take a list of data as a parameter.
// Function creates an amount of pages based on the length of the list. Every
// page will have 9 items so we take the ceiling of that list. We then take that
// ceiling and set it as the number of pages that will be available to view the data.
// We then select our link list class and reset the HTML. We then fill that html using
// a for loop based on the # of pages. That html will be filled with buttons.
// We then set the first button to a class of active. Finally we add a
// event listener that will listen for a click. Each click will reset the active class
// and then apply the active classic to the button that was clicked. Finally,
// showPage is called by that click that displays the data and the page based on the
// button clicked.
function addPagination(list) {
  // Building the html for the buttons and putting those buttons into link list.
  let pages = Math.ceil(list.length / itemsPerPage);
  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = ``;
  let html = `<li>`;
  for (let i = 0; i < pages; i++) {
    html += `
         <button type="button">${i + 1}</button>
      `;
  }
  html += `</li>`;
  linkList.innerHTML = html;

  // Setting first button to a class of active
  const firstButton = linkList.firstElementChild.firstElementChild;
  firstButton.className = "active";

  // Adding event listener to set new active class and call showPage
  linkList.addEventListener("click", (e) => {
    const buttons = document.querySelectorAll("button");
    if (e.target.tagName === "BUTTON") {
      for (let j = 0; j < buttons.length; j++) {
        buttons[j].className = "";
      }
      e.target.className = "active";
      showPage(data, e.target.innerHTML);
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
