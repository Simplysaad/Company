import {SEARCH} from './Search.js'
import {ADD_TO_CART} from './addToCart.js'

let previewCont = document.getElementById('preview')
previewCont.style.display = 'none'

export const preview =(element)=>{
  console.log(element)
  
  //Remove the main Container and the search container from display 
  mainCont.parentElement.style.display = 'none'
  searchCont.parentElement.style.display = 'none'

  previewCont.style.display = 'block'
  let previewImage = document.getElementById('previewImage')
  previewImage.src = element.image
  
  let previewTags = document.getElementById('previewTags')
  previewTags.replaceChildren()
  element.tags.forEach((tag)=>{
    let tagElement = document.createElement('p')
    tagElement.classList.add('tag', 'm-1', 'rounded', 'p-1')
    tagElement.textContent = tag
    previewTags.append(tagElement)
    
    tagElement.addEventListener('click', ()=>{
      //first clear the search Container
      searchCont.replaceChildren()
      
      //This removePreview() removes the previewCont from display
      removePreview()
      //then we search for the tag element
      SEARCH(tag)
      
      mainCont.parentElement.style.display = 'none'
      searchCont.parentElement.style.display = 'block'
    })
  })
  let previewInfo = document.getElementById('previewInfo')
  previewInfo.replaceChildren()
    let descElement = document.createElement('p')
    descElement.classList.add('desc', 'p-1', 'pb-md-5', 'm-1', 'fs-6')
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
  
  let btnCart = document.getElementById('btnCart')
  btnCart.addEventListener('click', ()=>{
    ADD_TO_CART(element)
  })

  
}
export const removePreview =()=>{
    //Bring the main Container back to display 
  mainCont.parentElement.style.display = 'block'
  previewCont.style.display = 'none'
}