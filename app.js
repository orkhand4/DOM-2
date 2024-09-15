//Tag yarandi - createElement
const h1_tag = document.createElement('h1')

// daxiline text elave edildi
h1_tag.innerText = 'Hakuna Matata'

//add style
h1_tag.classList.add('hakuna')

//add h1 tag into wrapper div
//Step1 - take div tag
const div_tag = document.querySelector('.wrapper')

//Step2 - add h1 into div using appenChild()
div_tag.appendChild(h1_tag)