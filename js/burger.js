document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header-container__burger').addEventListener('click', function () {
    document.querySelector('.burger__nav').classList.add('nav-burger-list__active')
    // let hone = document.querySelector('.section__hero').querySelector('.section__hero_content').clientHeight
    // let htwo = document.querySelector('.header').clientHeight
    // let h = hone + htwo
    // document.querySelector('.burger__nav').style.height = h + 'px'
  })
  console.log(document.querySelector('.header').clientHeight)
  document.querySelector('.header-container__burger_x').addEventListener('click', function () {
    document.querySelector('.burger__nav').classList.remove('nav-burger-list__active')
  })
})
