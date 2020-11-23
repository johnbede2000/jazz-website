function menuClick() {
  let mobMenu = document.getElementById('nav-list');
  let height = document.getElementById('nav-height');
  if (mobMenu.className === 'closed') {
    mobMenu.className = 'open';
    height.className = 'mobile';
  } else {
    mobMenu.className = 'closed';
    height.className = 'desktop';
  }
}