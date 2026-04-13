document.addEventListener('DOMContentLoaded', () => {
  const noBtn = document.getElementById('noBtn');

  const randomMove = (button) => {
    const parent = button.closest('.hero-card');
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();
    const maxX = Math.max(rect.width - btnRect.width - 20, 0);
    const maxY = Math.max(rect.height - btnRect.height - 20, 0);
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY * 0.35);
    button.style.transform = `translate(${x}px, ${y}px)`;
  };

  if (noBtn) {
    noBtn.addEventListener('mouseenter', () => randomMove(noBtn));
    noBtn.addEventListener('click', (event) => {
      event.preventDefault();
      randomMove(noBtn);
    });
  }
});
