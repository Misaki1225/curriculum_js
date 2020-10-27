class Taiyaki{
    constructor(name){
        this.name = name;
    }

    walk(){
        console.log(`中身は${this.name}です`);
    }
}


let annko = new Taiyaki('あんこ');
annko.walk();
let cream = new Taiyaki('クリーム');
cream.walk();
let cheese = new Taiyaki('チーズ');
cheese.walk();