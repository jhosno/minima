let btnBuger = document.getElementById('ae_menu_opener')
let menulink = document.getElementById('links-wrap')

btnBuger.addEventListener('click', () => {
  btnBuger.classList.toggle('on')
  menulink.classList.toggle('visible-flex')
  console.log('btn menu')
})


///form 


let carousel = document.getElementsByClassName('testimonials-container')
let counter
for (counter = 0; counter < carousel.length; counter++) {
  carousel[counter].addEventListener("click", function () {
    carousel[0].classList.remove('active');
    carousel[1].classList.remove('active');
    carousel[2].classList.remove('active');
    this.classList.add("active");
    console.log(this)
  });
}


for (const [key, value] of Object.entries(carousel)) {
  console.log(`${key}: ${value}`);
}
