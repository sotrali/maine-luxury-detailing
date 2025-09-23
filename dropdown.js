function toggleDropdown(headerClicked) {
  let body = headerClicked.nextElementSibling;
  let arrow = headerClicked.children[1];

  body.classList.toggle("open");
  arrow.classList.toggle("open");
}
