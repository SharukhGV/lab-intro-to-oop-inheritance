// Create class below


class Tamagotchi {
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed

    }
    greet() { console.log(`Hello, I'm ${this.name}`) }

    status() { console.log(`My energy is: ${this.energy}. I am this full:${this.full}. ${this.sick ? "I am not sick" : "I am sick"}`) };

    eat() { this.full += 2; this.energy -= 1; this.full > 10 ? this.sick = true : null };

    medicate() {


        if (!this.sick) {
            console.log("Refuses to take medicine.")
            this.energy -= 1
        }
        else {
            this.full = 9;
            this.energy -= 3;
            this.sick = false;
        }

    }
    play() {

        if (this.sick) { console.log("will not play"); this.mood -= 1; this.energy -= 1 }
        else if (this.mood > 9) { this.energy -= 2; this.full -= 1 }

        else if (this.energy <= 3) {
            console.log("I am too tired to play"); this.energy -= 1
        }
        else{
        this.mood += 2
        this.energy -= 1;
        this.full -= 1;}
    }

    sleep() { this.energy += 4; this.full -= 3 }



    timePasses() {
        if (this.sick === false) {
            this.mood -= 2;
            this.full -= 1;
            this.energy -= 1;
        }
        if (this.sick === true) {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }


    badGuardian() {
        if (this.energy <= 0) { this.rehomed = true };
        if (this.full <= 0) { this.rehomed = true };
        if (this.mood <= 0) { this.rehomed = true };
        if (this.full <= 0) { this.ehomed = true };
        console.log("tamagotchi has been rehomed");

    }

    // this.eat > 10 ? this.sick = true : null 




}


// Do not edit below this line
module.exports = Tamagotchi;
