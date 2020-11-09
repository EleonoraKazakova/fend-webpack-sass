//import { checkForName } from './js/nameChecker'
//import { handleSubmit } from './js/formHandler'

import { action } from './js/formWeather'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'


document.getElementById('generate').addEventListener('click', action)
console.log(document.getElementById('generate'))
//console.log(checkForName);

//alert("I EXIST")

/*export {
    checkForName,
    handleSubmit
}*/
