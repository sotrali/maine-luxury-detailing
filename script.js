let hamburger = document.getElementById("hamburger");

// toggle hamburger menu
hamburger.addEventListener("click", function () {
  let navMenu = document.getElementsByTagName("nav")[0];
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  const isExpanded = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isExpanded);
});

// close hamburger when nav link is clicked
let navLinks = document.getElementsByClassName("navLink");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function (event) {
    let navMenu = document.getElementsByTagName("nav")[0];
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
}

// close hamburger when click is outside of menu
document.addEventListener("click", function (event) {
  let navMenu = document.getElementsByTagName("nav")[0];
  const clickOutside =
    !hamburger.contains(event.target) && !navMenu.contains(event.target);

  if (clickOutside && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
}); 
