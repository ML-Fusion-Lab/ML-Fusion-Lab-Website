// Array of courses to dynamically render on the page
const courses = [
  {
    id: "course_1",
    img: "Course Assets/1.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "Google AI Essentials",
    desc: "Beginner · Course",
    skills: "",
  },
  {
    id: "course_2",
    img: "Course Assets/2.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "Python for Everybody",
    desc: "Beginner · Specialization",
    skills: "",
  },
  {
    id: "course_3",
    img: "Course Assets/3.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "Prompt Engineering",
    desc: "Beginner · Specialization",
    skills: "",
  },
  {
    id: "course_4",
    img: "Course Assets/4.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_5",
    img: "Course Assets/5.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_6",
    img: "Course Assets/6.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_7",
    img: "Course Assets/7.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_8",
    img: "Course Assets/8.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_9",
    img: "Course Assets/9.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_10",
    img: "Course Assets/10.png",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_11",
    img: "Course Assets/11.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
  {
    id: "course_12",
    img: "Course Assets/12.jpg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    logoName: "IBM",
    title: "IBM Data Science",
    desc: "Beginner · Professional Certificate",
    skills: "AI skills",
  },
];

// Select card container
const cardContainer = document.querySelector(".cards-container");
const loadMoreButton = document.querySelector(".load-more-button");
// Render courses
cardPerPage = 5;
currentIndex = 0;

const loadMore = () => {
  for (
    let i = currentIndex;
    i < currentIndex + cardPerPage && i < courses.length;
    i++
  ) {
    // Create card element
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardContent = document.createElement("div");
    const logoDiv = document.createElement("div");
    const logo = document.createElement("img");
    const title = document.createElement("h3");
    const desc = document.createElement("p");
    const skills = document.createElement("span");
    const logoName = document.createElement("span");
    // Set attributes
    card.className = "card";

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

  if (currentIndex > courses.length){
    loadMoreButton.classList.add("hide-btn")
  }
};

// Load cards on click event
loadMoreButton.addEventListener("click", () => {
  loadMore();
});

// Function is called once statically to load initial cards.
loadMore();