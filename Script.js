import {PRODUCTS} from './assets/DB/products.js'
import {CREATE_CARD} from './assets/JS/createCard.js'
import {SEARCH} from './assets/JS/Search.js'
import {preview, removePreview} from './assets/JS/Preview.js'
import {ADD_TO_CART} from './assets/JS/addToCart.js'

//console.log(PRODUCTS, CREATE_CARD, SEARCH)

// INITIALIZATIONS START HERE
//initializing containers for the search results and products listing
let searchCont = document.getElementById('searchCont')
let mainCont = document.getElementById('mainCont')
let previewCont = document.getElementById('previewCont')

mainCont.parentElement.style.display = 'block'
searchCont.parentElement.style.display = 'none'
previewCont.parentElement.style.display = 'none'

//the search bar just under the navgation
let searchForm = document.getElementById('searchForm')
let btnSearch = document.getElementById('btnSearch')
let btnCancel = document.getElementById('btnCancel')

let btnBack = document.getElementById('btnBack')

let btnCart = document.getElementById('btnCart')

// INITIALIZATIONS END HERE

// FUNCTION CALLS START HERE
PRODUCTS.forEach((product)=>{
  CREATE_CARD(product, mainCont)
})

//ALL FUNCTION CALLS END HERE


//EVENTS HANDLERS START

//This block calls the search function that was imported whenever the searchForm is submitted
searchForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  searchCont.replaceChildren()
 
  SEARCH()
  
  removePreview()
  mainCont.parentElement.style.display = 'none'
  searchCont.parentElement.style.display = 'block'
})
btnCancel.addEventListener('click', ()=>{
  mainCont.parentElement.style.display = 'block'
  searchCont.parentElement.style.display = 'none'
})
btnBack.addEventListener('click', ()=>{
  removePreview()
})

//btnCart.addEventListener('click', ()=>{
//   ADD_TO_CART(element)
// })
//EVENTS HANDLERS END
