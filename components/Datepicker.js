class Datepicker extends HTMLInputElement{

    connectedCallback(){
        this.calendar = flatpickr(this)
    }


    disconnectedCallback(){
       // this.calendar.destr
    }
}