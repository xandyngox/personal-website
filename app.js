const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${
          index / 8 + 0.3
        }s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

const arrowClick = () => {
  const arrow = document.querySelector(".arrow-wrapper");
  arrow.addEventListener("click", () => {
    window.location.href = "#projects";
  });
};

const logoClick = () => {
  const logo = document.querySelector(".logo img");
  logo.addEventListener("click", () => {
    window.location.href = "#projects";
  });
};

navSlide();
arrowClick();
logoClick();
