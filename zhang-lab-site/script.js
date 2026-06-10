<script>
document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

});
</script>
