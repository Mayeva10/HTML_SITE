// Script pour gérer le menu toggle responsive

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Fonction pour basculer le menu
  menuToggle.addEventListener("click", function () {
    // Toggle la classe 'active' sur le bouton hamburger
    menuToggle.classList.toggle("active");

    // Toggle la classe 'active' sur les nav-links
    navLinks.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      navLinks.classList.contains("active")
    ) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    }
  });
});
