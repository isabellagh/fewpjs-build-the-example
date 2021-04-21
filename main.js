// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// modal.className = "hidden" (instead of changing in the html)

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector('#modal')
// modal.hidden = false
  const hearts = document.getElementsByClassName("like-glyph")
// have a collection of hearts
// add an event listener to each heart

  for (const heart of hearts){
    heart.addEventListener("click", (e) => {
// make a server call
      mimicServerCall() //return a promise
      .then(() => {
// when successful, change the heart
// if its empty, make it full
// else if its full, make it empty
      if (heart.innerHTML == EMPTY_HEART){
        heart.innerHTML = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
      }
      })
      .catch(error => {
        modal.hidden = false
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() => {
// do this during the timeout
          modal.hidden = true 
        }, 5000)
      })
    })
  }
})

// Your JavaScript code goes here!




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
