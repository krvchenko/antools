import Swiper, { Navigation, Pagination } from 'swiper'
import 'normalize.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/styles/index.scss'

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const loadMoreTools = document.querySelector('.tools__more')
loadMoreTools.addEventListener('click', (e) => {
  e.preventDefault()

  const toolsHidden = document.getElementsByClassName('tools__card card_hidden')

  for (let i = toolsHidden.length - 1; i >= 0; i--) {
    if (i < 3) {
      toolsHidden[i].classList.remove('card_hidden')
    }
  }

  if (!toolsHidden.length) {
    e.target.classList.add('tools__more_hidden')
  }
})

const menuToggle = document.querySelector('.menu-toggle')

menuToggle.addEventListener('click', (e) => {
  e.preventDefault()

  const nav = document.querySelector('.nav'),
    body = document.querySelector('body')

  if (!nav.classList.contains('nav_opened')) {
    nav.classList.add('nav_opened')
    body.classList.add('menu-opened')
  } else {
    nav.classList.remove('nav_opened')
    body.classList.remove('menu-opened')
  }

  if (!e.target.classList.contains('menu-toggle_opened')) {
    e.target.classList.add('menu-toggle_opened')
  } else {
    e.target.classList.remove('menu-toggle_opened')
  }
})
