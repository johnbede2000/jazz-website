function menuClick() {
  let myTopnav = document.getElementById('myTopnav');
  if (myTopnav.className === 'topnav') {
    myTopnav.className += ' mobile cross';
  } else {
    myTopnav.className = 'topnav';
  }
}
// check this now I've split things between nav-container and topnav
