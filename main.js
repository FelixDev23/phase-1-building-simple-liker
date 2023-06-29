// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const emptyHeart = document.querySelector('.like-glyph');
const fullHeart = document.querySelector('.activated-heart');
const errorModal = document.querySelector('#modal');
const errorMessage = document.querySelector('#modal-message');

// Add the .hidden class to the error modal in the HTML
errorModal.classList.add('hidden');

// Event listener for the empty heart
emptyHeart.addEventListener('click', function() {
  mimicServerCall()
    .then(function(response) {
      emptyHeart.classList.remove('like-glyph');
      emptyHeart.classList.add('activated-heart');
      emptyHeart.textContent = FULL_HEART;
    })
    .catch(function(error) {
      errorModal.classList.remove('hidden');
      errorMessage.textContent = error;
      setTimeout(function() {
        errorModal.classList.add('hidden');
      }, 3000);
    });
});

// Event listener for the full heart
fullHeart.addEventListener('click', function() {
  fullHeart.classList.remove('activated-heart');
  fullHeart.classList.add('like-glyph');
  fullHeart.textContent = EMPTY_HEART;
});

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
