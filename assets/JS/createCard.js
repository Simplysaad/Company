import {preview, removePreview} from './Preview.js'
//import {addToCart} from './addToCart.js'
export const CREATE_CARD =(element, parent)=>{

  let card_col = document.createElement('div')
  card_col.classList.add('col-6', 'col-md-4', 'col-lg-3')
  parent.append(card_col)
  
  let card = document.createElement('div')
  card.classList.add('card')
  card.addEventListener('click', ()=>{
    preview(element)
  })
  card_col.append(card)
  
  let card_image = document.createElement('img')
  card_image.classList.add('card-image','img-thumbnail', 'img-fluid')
  card_image.src = element.image
  //card_image
  card.append(card_image)
  
  let card_body = document.createElement('div')
  card_body.classList.add('card-body')
  card.append(card_body)
  
  let card_price = document.createElement('p')
  card_price.classList.add('card-title', 'fs-4', 'fw-bold', 'text-success')
  card_price.textContent =  '\u20A6'+ (element.price)
  //card_price.textContent =  '\u20A6'+ (element.price * (element.discount/100))
  card_body.append(card_price)
  
  let card_title = document.createElement('p')
  card_title.classList.add('card-title', 'fs-4')
  card_title.textContent = element.name
  card_body.append(card_title)
  
  let card_desc = document.createElement('p')
  card_desc.classList.add('card-title')
  card_desc.textContent = element.description.split(' ').splice(1, 5).join(' ')
  + '...'
  card_body.append(card_desc)
  
  let card_btn = document.createElement('button')
  card_btn.classList.add('btn','btn-success')
  card_btn.textContent = 'Add to Cart'
  card_body.append(card_btn)
  
  card_btn.addEventListener('click', ()=>{
    addToCart(element)
  })
}
