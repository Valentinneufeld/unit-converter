/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let testField = document.querySelector("#test")
let inputField = document.querySelector("#input")
let lengthConversion = document.querySelector("#length-conversion")
let volumeConversion = document.querySelector("#volume-conversion")
let massConversion = document.querySelector("#mass-conversion")
let numberToConvert = 0 
let length = 0
let volume = 0
let mass = 0

const convertBtn = document.querySelector("#convert-btn")

convertBtn.addEventListener("click", function() {
    numberToConvert = inputField.value
    convert()
})

function convert() {
    // volumeConversion.innerHTML = numberToConvert
    
    let volumeLiters = Number(numberToConvert) * 0.264
    volumeLiters = volumeLiters.toFixed(3)
    let volumeGallons =  Number(numberToConvert) / 0.264
    volumeGallons = volumeGallons.toFixed(3)
    volumeConversion.innerHTML = `${numberToConvert} liters = ${volumeGallons} gallons | ${numberToConvert} gallons = ${volumeLiters} liters`
    
    let lengthMeter = Number(numberToConvert) * 3.281
    lengthMeter = lengthMeter.toFixed(3)
    let lengthFeet =  Number(numberToConvert) / 3.281
    lengthFeet = lengthFeet.toFixed(3)
    lengthConversion.innerHTML = `${numberToConvert} meters = ${lengthFeet} feet | ${numberToConvert} feet = ${lengthMeter} meters`

    let massKilogramms = Number(numberToConvert) * 3.281
    massKilogramms = massKilogramms.toFixed(3)
    let massPounds =  Number(numberToConvert) / 3.281
    massPounds = massPounds.toFixed(3)
    massConversion.innerHTML = `${numberToConvert} kilos = ${massPounds} pounds | ${numberToConvert} pounds = ${massKilogramms} kilos`
    
}