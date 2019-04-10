// Your code goes here

// 1. Load

window.addEventListener('load', (event) => {
    console.log('The page is now fully loaded!');
});

// 2. Scroll

let last_known_scroll_position = 0;
let ticking = false;

function wereScrolling(scroll_pos) {
  console.log(`We're scrolling!`);
}

window.addEventListener('scroll', function(event) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
        wereScrolling(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// 3. Click

const bodyGreen = document.querySelector('body');
bodyGreen.addEventListener('click', function(eventBody){
    console.log(`Event Target: ${eventBody.target}`);
    eventBody.target.style.color = "green";
});

// 4. Double Click

const bodyBlack = document.querySelector('body');
bodyBlack.addEventListener('dblclick', function(eventBody){
    console.log(`Event Target: ${eventBody.target}`);
    eventBody.target.style.color = "black";
});

// 5. Mouse Over

var navSelect = document.querySelector('.main-navigation');

navSelect.addEventListener('mouseenter', function(event){   
    event.target.style.backgroundColor = "#FFE4E1";
  });

// 6. Keyup

var textWindow = document.getElementById('secureLog');

textWindow.addEventListener('keyup', function(event){
    console.log(event.target.value)
});

// 7. Focus

var textWindow = document.getElementById('secureLog');

textWindow.addEventListener('focus', function(event){
    event.target.style.background = '#DA70D6';
})

// 8. Copy

var cannotCopy = document.querySelector('footer p');

cannotCopy.addEventListener('copy', function(event){
    alert("This is copyright protected and you cannot copy!");
});

// 9. Select

window.addEventListener('select', function(event){
    console.log(event.currentTarget.value);
});

// 10. Resize

window.addEventListener('resize', function(event){
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    console.log(`"Window size: width=" + ${w} + ", height=" + ${h}`)
});

// Prevent Propagation

var mainContent = document.querySelector('.content-pick');
mainContent.addEventListener('click', function(event){
    console.log("An alert was triggered by clicking the whole Div!");
});

var btnClick = document.getElementById('destButton');
btnClick.addEventListener('click', function(event){
    console.log("An alert was triggered by clicking the button!");
    event.stopPropagation();
});

// Stop Navigation

var navAnchor = document.querySelector('nav a')
navAnchor.addEventListener('click', function(event) {
  event.preventDefault()
})
