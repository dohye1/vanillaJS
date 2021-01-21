const panels = document.querySelectorAll('.panel');

const PANEL_OPEN = 'panel-open';
const OPEN_ACTIVE = 'open-active';

let prevNode;

function toggleOpen() {
  if (prevNode) prevNode.classList.toggle(PANEL_OPEN);
  this.classList.toggle(PANEL_OPEN);
  prevNode = this;
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
