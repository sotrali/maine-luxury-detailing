function toggleDropdown(headerClicked) {
  let body = headerClicked.nextElementSibling;
  let arrow = headerClicked.children[1];

  headerClicked.classList.toggle("open");
  body.classList.toggle("open");
  arrow.classList.toggle("open");
}
