function menuClick() {
  let mobMenu = document.getElementById('nav-list');
  let height = document.getElementById('nav-height');
  if (mobMenu.className === 'closed') {
    mobMenu.className = 'open';
    height.className = 'mobile';
  } else {
    mobMenu.className = 'closed';
    height.className = 'default';
  }
}

function closeMenu() {
  document.getElementById('nav-list').className = 'closed';
  document.getElementById('nav-height').className = 'default';
}

function goBack() {
  window.history.back();
}

function storeSession() {
  sessionStorage.setItem('submitted', 'yes');
}
