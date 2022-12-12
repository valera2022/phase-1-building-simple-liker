// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  let uncoloredHearts= document.querySelectorAll(".like-glyph");
  console.log(uncoloredHearts);
//  uncoloredHearts.addEventListener("click", event => {
//   fetch (mimicServerCall()).then((m) => {} )

//  })
uncoloredHearts.forEach(heart => {
  heart.addEventListener("click", event => {
    console.log(event);
     mimicServerCall()
     .then((m) => {
      if(heart.innerText === EMPTY_HEART){ 
          heart.innerText = FULL_HEART
          heart.className = "activated-heart"
      }
      else if(heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
        heart.className = ""
      }
      console.log("event", m)
     })
     .catch(error => {
      console.log("error", error)
     })

  } )
})

//HeartEvent()



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
