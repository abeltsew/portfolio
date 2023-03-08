// Toogle Mobile Menu
const menu = document.querySelector('.mobileMenu');
const mobileMenu = document.querySelector('.menu-mobile');
const toggleMenu = () => {
  mobileMenu.classList.toggle('showMenu');
};

menu.addEventListener('click', () => toggleMenu());
mobileMenu.addEventListener('click', () => toggleMenu());

// Toogle pop Up Menu

const projects = [
  {
    id: 1,
    title: 'Multi Post Stories ',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
  {
    id: 2,
    title: 'Data Dashboard Healthcare',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
  {
    id: 3,
    title: 'Website Protfolio',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
  {
    id: 4,
    title: 'Profesional Art Printing Data More',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
  {
    id: 5,
    title: 'Data Dashboard',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
  {
    id: 6,
    title: 'Portfolio',
    tech: ['html', 'Bootstrap', 'Ruby on rails'],
    image: 'images/Detail_img.png',
    description:
      "Loremd dummy text ever since the 1500s, with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    shortDesc:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    liveLink: 'https://abeltsew.github.io/portfolio/',
    sourceCode: 'https://github.com/abeltsew',
  },
];

const popUpDetail = (project) => {
  const modal = document.querySelector('.modal');
  modal.classList.toggle('showModal');

  const dark = document.querySelector('.work');
  dark.style.backgroundColor = '#000';

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const modalTitle = document.createElement('div');
  modalTitle.classList.add('modal-title');

  const modalHeading = document.createElement('h2');
  modalHeading.classList.add('modal-heading');
  modalHeading.innerHTML = project.title;
  const modalClose = document.createElement('h2');
  modalClose.classList.add('modal-close');
  modalClose.innerHTML = 'x';

  const modalBtns = document.createElement('div');
  modalBtns.classList.add('modal-btns');

  const modalCardBtns = document.createElement('ul');
  modalCardBtns.classList.add('modalCardBtns');
  project.tech.forEach((techno) => {
    const li = document.createElement('li');
    const modalCardBtn = document.createElement('button');
    modalCardBtn.classList.add('modalCardBtn');
    modalCardBtn.innerHTML = techno;
    li.appendChild(modalCardBtn);
    modalCardBtns.appendChild(li);
  });

  modalBtns.appendChild(modalCardBtns);
  modalTitle.appendChild(modalHeading);
  modalTitle.appendChild(modalClose);

  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalBtns);

  const modalImgDesc = document.createElement('div');
  modalImgDesc.classList.add('modal-img-desc');

  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-img');
  modalImg.src = project.image;
  modalImg.alt = 'Project wallpaper';

  modalImgDesc.appendChild(modalImg);

  const modalDescBtns = document.createElement('div');
  modalDescBtns.classList.add('modal-desc-btns');

  const modalDesc = document.createElement('p');
  modalDesc.classList.add('modal-desc');
  modalDesc.innerHTML = project.description;

  modalDescBtns.appendChild(modalDesc);

  const modalLinks = document.createElement('div');
  modalLinks.classList.add('modal-links');

  const modalLink = document.createElement('button');
  modalLink.classList.add('modal-link');
  modalLink.innerHTML = 'See Live';

  modalLink.addEventListener('click', () => {
    window.location.href = project.liveLink;
  });

  const liveImg = document.createElement('img');
  liveImg.src = 'images/live-link.png';

  modalLink.appendChild(liveImg);

  modalLinks.appendChild(modalLink);

  const modalLinkSource = document.createElement('button');
  modalLinkSource.classList.add('modal-link');
  modalLinkSource.innerHTML = 'See Source';

  modalLinkSource.addEventListener('click', () => {
    window.location.href = project.sourceCode;
  });

  const sourceImg = document.createElement('img');
  sourceImg.src = 'images/source-link.png';

  modalLinkSource.appendChild(sourceImg);

  modalLinks.appendChild(modalLink);

  modalLinks.appendChild(modalLinkSource);

  modalDescBtns.appendChild(modalLinks);

  modalImgDesc.appendChild(modalDescBtns);

  modalContent.appendChild(modalImgDesc);

  modal.appendChild(modalContent);

  // close the Modal
  const modalCloseBtn = document.querySelector('.modal-close');
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('showModal');
    modal.removeChild(modalContent);
    const dark = document.querySelector('.work');
    dark.style.backgroundColor = '#fff';
  });
};
// Build Main project card

const mainProject = {
  title: 'Multi-Post Stories',
  mainImage: 'images/projectImg.png',
  image: 'images/Detail_img.png',
  alt: 'Main project container',
  description:
    " A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
};

const mainProjectInfo = document.querySelector('.projects');

const mainImg = document.createElement('img');

mainImg.classList.add('projectImg');
mainImg.src = mainProject.mainImage;
mainImg.alt = mainProject.alt;

mainProjectInfo.appendChild(mainImg);

const projectInfo = document.createElement('div');
projectInfo.classList.add('projectInfo');

const projectTitle = document.createElement('h2');
projectTitle.classList.add('projectTitle');
projectTitle.innerHTML = mainProject.title;

projectInfo.appendChild(projectTitle);

const projectDesc = document.createElement('p');
projectDesc.classList.add('projectDesc');
projectDesc.innerText = mainProject.description;

projectInfo.appendChild(projectDesc);

const tools = document.createElement('ul');
tools.classList.add('tools');

mainProject.tech.forEach((techno) => {
  const li = document.createElement('li');
  const btn = document.createElement('button');
  btn.classList.add('toolsBtn');
  btn.innerHTML = techno;
  li.appendChild(btn);
  tools.appendChild(li);
});

projectInfo.appendChild(tools);

const mainSeeBtn = document.createElement('button');
mainSeeBtn.classList.add('mainSeeBtn');
mainSeeBtn.innerHTML = 'See Project';
mainSeeBtn.addEventListener('click', () => popUpDetail(mainProject));

projectInfo.appendChild(mainSeeBtn);

mainProjectInfo.appendChild(projectInfo);

// build card

projects.forEach((project) => {
  const cards = document.querySelector('.cards');
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('cardContainer');

  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundImage = 'url(./images/card-bg.png)';
  card.style.backgroundPosition = 'center';

  const cardTitle = document.createElement('h2');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);

  const cardDesc = document.createElement('p');
  cardDesc.innerHTML = project.shortDesc;
  card.appendChild(cardDesc);

  const cardBtns = document.createElement('ul');
  cardBtns.classList.add('cardBtns');

  project.tech.forEach((btn) => {
    const li = document.createElement('li');
    const cardBtn = document.createElement('button');
    cardBtn.classList.add('cardBtn');
    cardBtn.innerHTML = btn;
    li.appendChild(cardBtn);
    cardBtns.appendChild(li);
  });

  card.appendChild(cardBtns);

  cardContainer.appendChild(card);
  // create and add see Button
  const seeBtn = document.createElement('button');
  seeBtn.classList.add('cardSeeProj');
  seeBtn.id = project.id;
  seeBtn.innerHTML = 'See project';

  seeBtn.addEventListener('click', () => popUpDetail(project));

  cardContainer.appendChild(seeBtn);

  cards.appendChild(cardContainer);
});

// Form Validation

const form = document.querySelector('form');
const { email } = form.elements;
const error = document.querySelector('.error');
error.style.display = 'none';

const showError = (isError) => {
  error.style.textAlign = 'center';

  const emailField = document.getElementById('email');
  if (isError) {
    error.innerHTML = 'Email should be in Lower case';
    error.style.display = 'inline';
    emailField.style.borderBottom = 'solid red 1px';
  } else {
    error.innerHTML = '';
    error.style.display = 'none';
    emailField.style.border = 'none';
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showError(false);
  const isLowerCase = email.value === email.value.toLowerCase();
  if (isLowerCase) {
    form.submit();
  } else {
    showError(true);
  }
});
