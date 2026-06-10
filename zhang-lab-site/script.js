const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
fetch('publications.json')
<script>
document.addEventListener("DOMContentLoaded", function () {

  const toggle =
    document.querySelector(".nav-toggle");

  const nav =
    document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

});
</script>
