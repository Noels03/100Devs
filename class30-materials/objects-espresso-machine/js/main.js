//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(color, make, model, price){
        this.color = color
        this.make = make
        this.model = model
        this.price = price
    }

    //what we need it to do//
    turnOn(){
        console.log('Good day, I am now on!')
    }
    steam(){
        console.log('ITTSSS SUMMERRR SALEEE 50%%%')

    }
    brew(){
        console.log('Good stuff coming your way')
    }
}

let gaggia = new EspressoMachine('red', 'Gaggia', 'Classic Pro', 400)

