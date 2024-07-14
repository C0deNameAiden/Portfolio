 function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('.project-btn').forEach(button => {
  const href = button.getAttribute('onclick').match(/window\.open\('(.*?)'/)[1];
  button.setAttribute('onclick', `window.open('${href}', '_blank')`);
});