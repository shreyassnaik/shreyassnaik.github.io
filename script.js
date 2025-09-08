// small interactivity: theme toggle and current year
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('theme-toggle');
  toggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light');
    // simple visual shuffle — you can expand with persisted preference
  });
});
