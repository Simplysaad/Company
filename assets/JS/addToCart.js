import {preview} from './Preview.js'
import {customMeas} from './CustomMeas.js'

let cartCont = document.getElementById('cartCont')
const CREATE_CART_ITEM =(element)=>{
  let cartItem = document.createElement('div')
  cartItem.classList.add('d-flex', 'justify-content-between', 'align-items-center','shadow' )
  cartItem.innerHTML = `<h1 class="display-5">${element.name}</h1>`
  cartCont.append(cartItem)
}



export const CartArray = new Array();
export const ADD_TO_CART =(element)=>{
  customMeas()
  CartArray.forEach((item)=>{
    CREATE_CART_ITEM(item)
    let newItem = {item, customMeas()}
    console.log(newItem)
  })
}
