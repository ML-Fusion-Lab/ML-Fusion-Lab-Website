import courses from "../script/courseDetails.js";

const cardContainer = document.querySelector(".cards-container");
const loadMoreButton = document.querySelector(".load-more-button");
const searchInput = document.getElementById("search-id");

// Render courses
const cardPerPage = 5;
let currentIndex = 0;
let filteredCourses = courses; // Create a filtered array

// Function to create and append course cards
const createCourseCard = (course) => {
  const card = document.createElement("a");
  const cardImg = document.createElement("img");
  const cardContent = document.createElement("div");
  const logoDiv = document.createElement("div");
  const logo = document.createElement("img");
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const skills = document.createElement("span");
  const logoName = document.createElement("span");

  // Set attributes
  card.className = "card no-decoration";
  card.setAttribute("href", `course_details.html?courseId=${course.id}`);
  cardImg.setAttribute("src", course.img);
  cardImg.setAttribute("alt", course.title);

  cardContent.className = "card-content";
  logoDiv.className = "logo";
  logoName.innerHTML = course.logoName;
  logoName.className = "logoName";
  logo.setAttribute("src", course.logo);

  title.innerHTML = course.title;
  desc.innerHTML = course.desc;

  skills.className = "tag";
  skills.innerHTML = course.skills;

  // Append the elements
  card.appendChild(cardImg);
  card.appendChild(cardContent);
  cardContent.appendChild(logoDiv);
  cardContent.appendChild(title);
  cardContent.appendChild(desc);

  if (course.skills) {
    cardContent.appendChild(skills);
  }

  logoDiv.appendChild(logo);
  logoDiv.appendChild(logoName);
  cardContainer.appendChild(card);
};

// Function to render courses
const renderCourses = () => {
  // Clear the container
  cardContainer.innerHTML = "";

  // Show courses based on current index and cardPerPage
  const coursesToShow = filteredCourses.slice(0, currentIndex + cardPerPage);
  coursesToShow.forEach((course) => createCourseCard(course));

  // Update the current index
  currentIndex += cardPerPage;

  // Hide load more button if all courses are loaded
  if (currentIndex >= filteredCourses.length) {
    loadMoreButton.classList.add("hide-btn");
  } else {
    loadMoreButton.classList.remove("hide-btn");
  }
};

// filter courses 
const filterCourses = (query) => {
  currentIndex = 0; 
  filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query.toLowerCase())
  );
  renderCourses();
};


loadMoreButton.addEventListener("click", () => {
  renderCourses();
});

//search input 
searchInput.addEventListener("input", (e) => {
  const searchQuery = e.target.value;
  filterCourses(searchQuery);
});

// Initial render of courses
renderCourses();


   document.addEventListener("DOMContentLoaded", function () {
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY - window.scrollY;
});

window.onload=function(){
  document.getElementById("search-id").focus();
}

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = `${x - 12}px`;
    circle.style.top = `${y - 12}px`;
    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

    const nextCircle = circles[index + 1] || circles[0];
    circle.x = x;
    circle.y = y;

    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
});

// Filter courses

let URLParams = new URLSearchParams(window.location.search);
let searchParams = URLParams.get("skill");

if (searchParams) {
  const courseSection = document.querySelector(".courses");
  let filterHeader = document.createElement("div");
  filterHeader.classList.add("filter-header");

  let removeFiltersBtn = document.createElement("button");
  removeFiltersBtn.classList.add("remove-filters-btn");
  removeFiltersBtn.innerHTML = "Remove filters";

  removeFiltersBtn.addEventListener("click", () => {
    filteredCourses = courses;
    renderCourses();
    window.history.pushState({}, document.title, window.location.pathname);
    filterHeader.remove();
  })

  let filterTitle = document.createElement("h2")
  filterTitle.setAttribute("id", "filterTitle")
  filterTitle.style.fontSize = "25px";
  filterTitle.style.marginBottom = 0;
  filterTitle.innerHTML = `Courses tagged with '<u>${searchParams}</u>'`;

  filterHeader.appendChild(filterTitle);
  filterHeader.appendChild(removeFiltersBtn);

  courseSection.prepend(filterHeader);

  let coursesWithTag = filteredCourses.filter((course) => course.skills.includes(searchParams));
  filteredCourses = coursesWithTag;
  renderCourses();
}