import SecondTimer from "./components/SecondTimer"
import Datepicker from "./components/Datepicker"
import MyButton from "./components/MyButton";

customElements.define('second-timer', SecondTimer);
//customElements.define('date-picker', Datepicker, {extends:'input'})
customElements.define('my-button', MyButton)

document.querySelector('#add').addEventListener('click', function(){
    //document.body.appendChild(new SecondTimer())
  //  document.querySelector('second-timer').remove()
    document.querySelector('second-timer').setAttribute('prefix','Demo')
})