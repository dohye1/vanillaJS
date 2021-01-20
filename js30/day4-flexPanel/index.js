const panels = document.querySelectorAll('.panel');

const PANEL_OPEN = 'panel-open';
const OPEN_ACTIVE = 'open-active';

function toggleOpen() {
  this.classList.toggle(PANEL_OPEN);
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle(OPEN_ACTIVE);
  }
}

function init() {
  panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener('transitionend', toggleActive)
  );
}

init();
