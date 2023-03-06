// Toogle Mobile Menu
const menu = document.querySelector(".mobileMenu");
const mobileMenu = document.querySelector(".menu-mobile");
const toggleMenu = () => {
  mobileMenu.classList.toggle("showMenu");
};

menu.addEventListener("click", () => toggleMenu());
mobileMenu.addEventListener("click", () => toggleMenu());

// Toogle pop Up Menu

const projects = [
  {
    title: "Multi Post Stories ",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLink: "",
    sourceCode: "",
  },
  {
    title: "Data Dashboard Healthcare",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: "",
    sourceCode: "",
  },
  {
    title: "Website Protfolio",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLink: "",
    sourceCode: "",
  },
  {
    title: "Profesional Art Printing Data More",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLink: "",
    sourceCode: "",
  },
  {
    title: "Data Dashboard",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLink: "",
    sourceCode: "",
  },
  {
    title: "Portfolio",
    tech: ["html", "Bootstrap", "Ruby on rails"],
    image: "images/Detail_img.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    liveLink: "",
    sourceCode: "",
  },
];

// build card

projects.map((project) => {
  const cards = document.querySelector(".cards"); //All cards container
  const cardContainer = document.createElement("div"); // single card container
  cardContainer.classList.add("cardContainer");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);

  const cardDesc = document.createElement("p");
  cardDesc.innerHTML = project.shortDesc;
  card.appendChild(cardDesc);

  const cardBtns = document.createElement("ul");
  cardBtns.classList.add("cardBtns");

  project.tech.map((btn) => {
    const li = document.createElement("li");
    const cardBtn = document.createElement("button");
    cardBtn.classList.add("cardBtn");
    cardBtn.innerHTML = btn;
    li.appendChild(cardBtn);
    cardBtns.appendChild(li);
  });

  card.appendChild(cardBtns);

  cardContainer.appendChild(card);
  // create and add see Button
  const seeBtn = document.createElement("button");
  seeBtn.classList.add("cardSeeProj");
  seeBtn.innerHTML = "See project";

  cardContainer.appendChild(seeBtn);

  cards.appendChild(cardContainer);
});

const modal = document.querySelector(".modal");

const seeProject = document.querySelectorAll(".cardSeeProj,.mainSeeBtn");

seeProject.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.toggle("showModal");
    const modalheading = document.querySelector(".modal-heading");
    const modalImg = document.querySelector(".modal-img");
    const modalClose = document.querySelector(".modal-close");
    const modalDesc = document.querySelector(".modal-desc");

    modalClose.addEventListener("click", () =>
      modal.classList.add("showModal")
    );
    modalheading.innerHTML = projects[parseInt(element.id)].title;
    modalImg.src = projects[parseInt(element.id)].image;
    modalDesc.innerHTML = projects[parseInt(element.id)].description;
  });
});
