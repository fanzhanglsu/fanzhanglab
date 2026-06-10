<script>
document.addEventListener("DOMContentLoaded", function () {

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {

    if (window.innerWidth <= 768) {
      nav.classList.toggle("mobile-open");
    }

  });

});
</script>
