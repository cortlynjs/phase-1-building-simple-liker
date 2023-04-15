// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide the error modal on page load
const modal = document.querySelector('#modal');
modal.classList.add('hidden');

function likeCallback(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      // Toggle the heart icon
      if (heart.classList.contains('activated-heart')) {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      } else {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      }
    })
    .catch((error) => {
      // Show the error modal with the error message
      modal.classList.remove('hidden');
      const modalMessage = document.querySelector('#modal-message');
      modalMessage.textContent = error;
      // Hide the error modal after 3 seconds
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
}

const hearts = document.querySelectorAll('.like-glyph');
for (const heart of hearts) {
  heart.addEventListener('click', likeCallback);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
