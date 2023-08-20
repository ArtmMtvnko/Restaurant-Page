"use strict"

import './index.html'
import './styles/index.scss'

import { navBtns } from './scripts/navButtons.js'
import { changePage } from './scripts/changePage.js'

import { homePage } from './scripts/homePage.js'
import { menuPage } from './scripts/menuPage.js'
import { aboutPage } from './scripts/aboutPage.js'

const mainContainer = document.querySelector('.container')

navBtns.home.addEventListener('click', () => {
    // mainContainer.innerHTML = homePage
    changePage(mainContainer, 'homePage')
})

navBtns.menu.addEventListener('click', () => {
    // mainContainer.innerHTML = menuPage
    changePage(mainContainer, 'menuPage')
})

navBtns.about.addEventListener('click', () => {
    // mainContainer.innerHTML = aboutPage
    changePage(mainContainer, 'aboutPage')
})