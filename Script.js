import {PRODUCTS} from './assets/DB/Products.js'

let mainCont = document.getElementById('mainCont')
let searchCont = document.getElementById('searchCont')
mainCont.parentElement.style.display = 'block'
searchCont.parentElement.style.display = 'none'
  
  
const CREATE_CARD =(element, parent)=>{

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

PRODUCTS.forEach((product)=>{
 CREATE_CARD(product, mainCont)
})

const SEARCH =()=>{
  let searchInput = document.getElementById('searchInput')
  let searchValue = searchInput.value.toLowerCase().split(' ')
  
  PRODUCTS.forEach((product)=>{
    let nameArr = product.name.toLowerCase().split(' ')
    let descArr = product.description.toLowerCase().split(' ')
    let tagsArr = product.tags
    
    let isExistName = searchValue.some((element) => nameArr.includes(element))
    let isExistDesc = searchValue.some((element) => descArr.includes(element))
    let isExistTag = searchValue.some((element) => tagsArr.includes(element))
    
    if(isExistName || isExistDesc || isExistTag){
      console.log(product._id, product.name)
      CREATE_CARD(product, searchCont)
    }
  })
}

// let cart = new Array()
// const addToCart =(element)=>{
//   cart.push(element)
//   console.log(cart)
// }

let btnSearch = document.getElementById('btnSearch')
btnSearch.addEventListener('click', ()=>{
  mainCont.parentElement.style.display = 'none'
  
  searchCont.replaceChildren()
  searchCont.parentElement.style.display = 'block'
  
  SEARCH()
})
searchInput.addEventListener('input', ()=>{
  
})
let btnCancel = document.getElementById('btnCancel')
btnCancel.addEventListener('click', ()=>{
  mainCont.parentElement.style.display = 'block'
  searchCont.parentElement.style.display = 'none'
})

let previewCont = document.getElementById('preview')
previewCont.style.display = 'none'
const preview =(element)=>{
  console.log(element)
  previewCont.style.display = 'block'
  let previewImage = document.getElementById('previewImage')
  previewImage.src = element.image
  
  let previewTags = document.getElementById('previewTags')
  
  element.tags.forEach((tag)=>{
    let tagElement = document.createElement('p')
    tagElement.classList.add('tag', 'bg-secondary', 'p-1', 'm-1', 'rounded',
    'fs-6', 'text-light')
    tagElement.textContent = tag
    previewTags.append(tagElement)
  })
  let previewInfo = document.getElementById('previewInfo')
  
    let descElement = document.createElement('p')
    descElement.classList.add('desc', 'p-1', 'm-1', 'fs-6')
    descElement.textContent = element.description
    previewInfo.append(descElement)

  let previewName = document.getElementById('previewName')
  previewName.textContent = element.name
  
  let previewType = document.getElementById('previewType')
  previewType.textContent = element.type
  
  let previewBrand = document.getElementById('previewBrand')
  previewBrand.textContent = element.brand
  
  let previewMaterial = document.getElementById('previewMaterial')
  previewMaterial.textContent = element.material
  
  let previewGender = document.getElementById('previewGender')
  previewGender.textContent = element.gender
 
  let previewColors = document.getElementById('previewColors')
  previewColors.replaceChildren()
  element.colors.forEach((color)=>{
    let colorOption = document.createElement('option')
    colorOption.textContent = color
    colorOption.value = color
    previewColors.append(colorOption)
  })
  
  let previewSizes = document.getElementById('previewSizes')
  previewSizes.replaceChildren()
  element.sizes.forEach((size)=>{
    let sizeOption = document.createElement('option')
    sizeOption.textContent = size
    sizeOption.value = size
    previewSizes.append(sizeOption)
  })
    let custom = document.createElement('option')
    custom.textContent = "custom"
    custom.value = "custom"
    previewSizes.append(custom)
    
    
    let customMeas = document.getElementById('customMeas')
    customMeas.style.display = 'none'

    previewSizes.addEventListener('change', ()=>{
      if(previewSizes.value =='custom'){
        console.log('hello world')
        customMeas.style.display = 'flex'
      }
      else{
        customMeas.style.display = 'none'
      }
    })
  
  let customNeck = document.getElementById('customNeck')
  let customBust = document.getElementById('customBust')
  let customShoulder = document.getElementById('customShoulder')
  let customWrist = document.getElementById('customWrist')
  let customArm = document.getElementById('customArm')
  
  let customWaist = document.getElementById('customWaist')
  let customHip = document.getElementById('customHip')
  let customThigh = document.getElementById('customThigh')
  let customAnkle = document.getElementById('customAnkle')
  
  
}
