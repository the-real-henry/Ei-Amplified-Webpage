const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

var navbar = document.getElementById("navbar");
var menu = document.getElementById("navheight");

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove('sticky');
    }
}


const faders = documents.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 1
};
const appearOnScroll = new IntersectionObserver
(function(
  entries, 
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, 
appearOptions);

faders.forEach(faders => {
  appearOnScroll.observe(fader);
})