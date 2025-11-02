function bookMovie(name) {
  localStorage.setItem('selectedMovie', name);
  window.location.href = 'booking.html';
}

window.onload = function() {
  const movie = localStorage.getItem('selectedMovie');
  if (document.getElementById('selectedMovie')) {
    document.getElementById('selectedMovie').value = movie || '';
  }
};
