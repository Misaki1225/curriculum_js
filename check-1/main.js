let numbers=[2,5,12,13,15,18,22];
for (let i=0; i<numbers.length;i++){
    if(i%2===0)
    console.log(numbers[i] +'は偶数です');
}





class Car{
    constructor(oil,number){
        this.oil=oil;
        this.number=number;
    }

    walk(){
        console.log(`ガソリンは${this.oil}です。ナンバーは${this.number}です。`);
    }
}

let getNumGas=new Car('〇〇','△△');
getNumGas.walk();