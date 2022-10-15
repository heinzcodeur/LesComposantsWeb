import SecondTimer from "./components/SecondTimer";

customElements.define('second-timer', SecondTimer);

document.querySelector('#add').addEventListener('click', function(){
    //document.body.appendChild(new SecondTimer())
  //  document.querySelector('second-timer').remove()
    document.querySelector('second-timer').setAttribute('prefix','Demo')
})