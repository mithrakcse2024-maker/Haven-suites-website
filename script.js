// Toggle password/email visibility
function togglePasswordVisibility() {
  const pwd = document.getElementById('password');
  pwd.type = pwd.type === 'password' ? 'text' : 'password';
}
function toggleEmailVisibility() {
  const email = document.getElementById('email');
  email.type = email.type === 'email' ? 'text' : 'email';
}

// Sign-in form validation
document.getElementById('signinForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if(email === 'toto@gmail.com' && password === 'toto123'){
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
});

// Hotel navigation
function searchHotels() { alert('Search feature demo only.'); }
function goToHotel(name, price) {
  localStorage.setItem('hotelName', name);
  localStorage.setItem('hotelPrice', price);
  window.location.href = 'hotel.html';
}
function goBack() { window.history.back(); }
function bookHotel() {
  const name = localStorage.getItem('hotelName');
  const price = localStorage.getItem('hotelPrice');
  alert(Booking ${name} for ₹${price}/night);
}

// Profile functions
function signOut() { window.location.href = 'index.html'; }
function contactUs() { alert('Contact: support@havensuites.com'); }

// Payment
document.getElementById('paymentForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Payment Successful!');
});

// Load hotel details
window.onload = function() {
  if(document.getElementById('hotelName')) {
    document.getElementById('hotelName').innerText = localStorage.getItem('hotelName');
    document.getElementById('hotelPrice').innerText = 'Price: ₹' + localStorage.getItem('hotelPrice') + '/night';
  }
}
