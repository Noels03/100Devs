//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('WOOF')
    }
}
class Elephant extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
}

let doris = new Elephant('Doris', 'Elephant')