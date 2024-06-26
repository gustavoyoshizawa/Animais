// Nav
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemAtual, index) => {
      itemAtual.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

// Accordion List
function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function ativarAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", ativarAccordion);
    });
  }
}
initAccordionList();

// Scroll Link Interno
function initScroll() {
  const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linkInterno.forEach((item) => {
    item.addEventListener("click", scrollSection);
  });
}
initScroll();

// Scroll Suave

const sections = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.7;

sections[0].classList.add("ativo");

function animarScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = sectionTop - windowMetade < 0;
    if (isSectionVisible) {
      section.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", animarScroll);
