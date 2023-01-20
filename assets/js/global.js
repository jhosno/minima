let btnBuger = document.getElementById('ae_menu_opener')
let menulink = document.getElementById('links-wrap')

btnBuger.addEventListener('click', () => {
  btnBuger.classList.toggle('on')
  menulink.classList.toggle('visible-flex')
  console.log('btn menu')
})
