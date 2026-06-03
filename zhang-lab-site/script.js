const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}
fetch('publications.json')
<script>
fetch('data/people.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('people-grid');

    data.forEach(person => {
      const card = document.createElement('div');
      card.className = 'person-card';

      card.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <h3>${person.name}</h3>
        <p class="role">${person.role}</p>
        <p>${person.bio}</p>
        ${person.website ? `<a href="${person.website}" target="_blank">Website</a>` : ""}
      `;

      container.appendChild(card);
    });
  });
</script>
