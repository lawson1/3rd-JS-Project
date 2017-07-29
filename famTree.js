class Grandparents {
    set name(newValue){
        this._name = newValue;
    }
    get name(){
        return this._name;
    }
    set hairColor(newValue){
        this._hairColor = newValue;
    }
    get hairColor(){
        return this._hairColor;
    }
    set eyeColor(newValue){
        this._eyeColor = newValue;
    }
    get eyeColor(){
        return this._eyeColor;
    }
    vertical1(){
        console.log("Grandpa Lawson can jump 15 inches!");
    }
    vertical2(){
        console.log("Grandma Lawson can jump 12 inches!");
    }
    vertical3(){
        console.log("Grandpa Wilcher can jump 17 inches!");
    }
    vertical4(){
        console.log("Grandma Wilcher can jump 10 inches!")
    }
}

let grandparent1 = new Grandparents();
grandparent1.name = "Henry Lawson";
grandparent1.hairColor = "Blonde";
grandparent1.eyeColor = "Green"
grandparent1.vertical1();

let grandparent2 = new Grandparents();
grandparent2.name = "Grandma Lawson";
grandparent2.hairColor = "Gray";
grandparent2.eyeColor = "Blue";
grandparent2.vertical2();

let grandparent3 = new Grandparents();
grandparent3.name = "Grandpa Wilcher";
grandparent3.hairColor = "Bald";
grandparent3.eyeColor = "Hazel";
grandparent3.vertical3();

let grandparent4 = new Grandparents();
grandparent4.name = "Grandma Wilcher";
grandparent4.hairColor = "Brown";
grandparent4.eyeColor = "Green";
grandparent4.vertical4();

console.log(grandparent1, grandparent2, grandparent3, grandparent4);

class Parents {
    set name(newValue){
        this._name = newValue;
    }
    get name(){
        return this._name;
    }
    set hairColor(newValue){
        this._hairColor = newValue;
    }
    get hairColor(){
        return this._hairColor;
    }
    set eyeColor(newValue){
        this._eyeColor = newValue;
    }
    get eyeColor(){
        return this._eyeColor;
    }
    vertical1(){
        console.log("Dad can jump 13 inches!");
    }
    vertical2(){
        console.log("Mom can jump 7 inches!");
    }
}

let parent1 = new Parents();
parent1.name = "Michael Lawson";
parent1.hairColor = "Dark Blonde";
parent1.eyeColor = "Green";
parent1.vertical1();

let parent2 = new Parents();
parent2.name = "Carol Lawson";
parent2.hairColor = "Brown";
parent2.eyeColor = "Hazel";
parent2.vertical2();

console.log(parent1, parent2);

class Children {
    set name(newValue){
        this._name = newValue;
    }
    get name(){
        return this._name;
    }
    set hairColor(newValue){
        this._hairColor = newValue;
    }
    get hairColor(){
        return this._hairColor;
    }
    set eyeColor(newValue){
        this._eyeColor = newValue;
    }
    get eyeColor(){
        return this._eyeColor;
    }
    vertical1(){
        console.log("Jessica can jump 23 inches!");
    }
    vertical2(){
        console.log("Jennifer can jump 16 inches!");
    }
    vertical3(){
        console.log("Joanna can jump 6 inches!");
    }
    vertical4(){
        console.log("I can jump 14 inches!")
    }
}

let child1 = new Children();
child1.name ="Jessica Lawson";
child1.hairColor = "Brown";
child1.eyeColor = " Hazel";
child1.vertical1();

let child2 = new Children();
child2.name = "Jennifer Lara";
child2.hairColor = "Medium Blonde";
child2.eyeColor = "Green";
child2.vertical2();

let child3 = new Children();
child3.name = "Joanna Brees";
child3.hairColor = "Dark Brown";
child3.eyeColor = "Brown";
child3.vertical3();

let child4 = new Children();
child4.name = "Michael Lawson Jr";
child4.hairColor = "Light Blonde";
child4.eyeColor = "Green";
child4.vertical4();

console.log(child1, child2, child3, child4);

