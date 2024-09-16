import {CREATE_CARD} from './createCard.js'
import {PRODUCTS} from '../DB/products.js'
export const SEARCH =(searchWord)=>{
  let searchInput = document.getElementById('searchInput')
  
  if(searchWord != null){
    searchInput.value = searchWord
  }
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