import courses from "./courseDetails.js";

// Select card container
const cardContainer = document.querySelector(".cards-container");
const loadMoreButton = document.querySelector(".load-more-button");
// Render courses


const cardPerPage = 5;
let currentIndex = 0;

const loadMore = () => {
  for (
    let i = currentIndex;
    i < currentIndex + cardPerPage && i < courses.length;
    i++
  ) {
    // Create card element
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
    card.setAttribute("href", `course_details.html?courseId=${courses[i].id}`);

    cardImg.setAttribute("src", courses[i].img);
    cardImg.setAttribute("alt", courses[i].title);

    cardContent.className = "card-content";

    logoDiv.className = "logo";
    logoName.innerHTML = courses[i].logoName;
    logoName.className = "logoName";
    logo.setAttribute("src", courses[i].logo);

    title.innerHTML = courses[i].title;
    desc.innerHTML = courses[i].desc;

    skills.className = "tag";
    skills.innerHTML = courses[i].skills;

    // Append the elements
    card.appendChild(cardImg);
    card.appendChild(cardContent);

    cardContent.appendChild(logoDiv);
    cardContent.appendChild(title);
    cardContent.appendChild(desc);

    // If skill is not present then do not append
    if (courses[i].skills) {
      cardContent.appendChild(skills);
    }

    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoName);
    cardContainer.appendChild(card);
  }
  currentIndex += cardPerPage;

  if (currentIndex > courses.length) {
    loadMoreButton.classList.add("hide-btn");
  }
};

// Load cards on click event
loadMoreButton.addEventListener("click", () => {
  loadMore();
});

// Function is called once statically to load initial cards.
loadMore();

// <!-- js for mouse cursor trail effect -->

   document.addEventListener("DOMContentLoaded", function () {
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.pageX;
  coords.y = e.pageY - window.scrollY; // Adjust for vertical scroll position
});

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