"use strict"

import './index.html'
import './styles/index.scss'

import { navBtns } from './scripts/navButtons.js'
import { changePage } from './scripts/changePage.js'  

const mainContainer = document.querySelector('.container')

// mainContainer.innerHTML = 
// `
// <div id="homePage" style="background-color: red"></div>
// <div id="menuPage" style="background-color: blue"></div>
// <div id="aboutPage" style="background-color: green"></div>
// `

navBtns.home.addEventListener('click', () => {
    changePage(mainContainer, 'homePage')
})

navBtns.menu.addEventListener('click', () => {
    changePage(mainContainer, 'menuPage')
})

navBtns.about.addEventListener('click', () => {
    changePage(mainContainer, 'aboutPage')
})