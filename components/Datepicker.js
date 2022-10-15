export default class Datepicker extends HTMLInputElement{

    connectedCallback(){
        this.calendar = flatpicker(this)
    }


    disconnectedCallback(){
       this.calendar.destroy
    }
}