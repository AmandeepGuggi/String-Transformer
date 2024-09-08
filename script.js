const input = document.querySelector('form input')
const lowerCaseOutput = document.querySelector('#lowercase span')
const upperCaseOutput = document.querySelector('#uppercase span')
const camelCaseOutput = document.querySelector('#camelcase span')
const pascalCaseOutput = document.querySelector('#pascalcase span')
const snakeCaseOutput = document.querySelector('#snakecase span')
const kebabCaseOutput = document.querySelector('#kebabcase span')
const trimCaseOutput = document.querySelector('#trim span')

function capitalizeFirst(str){
   if(!str) return str
return str[0].toUpperCase() + str.slice(1, str.length)
}

function toCamelCase(string){
const lowerCaseString = string.toLowerCase()
const wordsArray = lowerCaseString.split(' ')
const finalArray = wordsArray.map((word,i)=>{
   if(i===0) return word
   return capitalizeFirst(word)
})
return finalArray.join('')
}

function toPascalCase(string){
const lowerCaseString = string.toLowerCase()
const wordsArray = lowerCaseString.split(' ')
const finalArray = wordsArray.map((word,i)=>{
   // for(i=0;i<=string.length;i++)
   return capitalizeFirst(word)
})
return finalArray.join('')
}

function toSnakeCase(string){
const lowerCaseString = string.toLowerCase()
const wordsArray = lowerCaseString.split(' ')
return wordsArray.join('_')
}

function toKebabCase(string){
const lowerCaseString = string.toLowerCase()
const wordsArray = lowerCaseString.split(' ')
return wordsArray.join('-')
}

function toTrim(string){
return string.replaceAll(' ','')
}

function updateScreen(){
   lowerCaseOutput.textContent = input.value.toLowerCase() 
   upperCaseOutput.textContent = input.value.toUpperCase()
   camelCaseOutput.textContent =toCamelCase( input.value)
   pascalCaseOutput.textContent =toPascalCase( input.value)
   snakeCaseOutput.textContent =toSnakeCase( input.value.trim())
   kebabCaseOutput.textContent =toKebabCase( input.value.trim())
   trimCaseOutput.textContent =toTrim(input.value)
}
updateScreen()
input.addEventListener('input',()=>{
   updateScreen()
})