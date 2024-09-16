import {preview} from './Preview.js'
import {ADD_TO_CART} from './addToCart.js'

export const customMeas =()=>{
  // let customMeasCont = document.getElementById('customMeas')
  //   customMeasCont.style.display = 'none'
    
  let customNeck = document.getElementById('customNeck').value
  let customBust = document.getElementById('customBust').value
  let customArm = document.getElementById('customArm').value
  let customShoulder = document.getElementById('customShoulder').value
  let customWrist = document.getElementById('customWrist').value
  
  let customWaist = document.getElementById('customWaist').value
  let customHip = document.getElementById('customHip').value
  let customThigh = document.getElementById('customThigh').value
  let customTrouserLength = document.getElementById('customTrouserLength').value
  
  
  let customMeasurement = {customNeck, customBust, customShoulder, customWrist, customArm, customWaist, customHip, customThigh}
  console.log(customMeasurement)
}