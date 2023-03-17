let x:number = 10;
let y:string = 'marcos';
let boo:boolean = true;

const myNumber:number[] = [1,2,6];

const myString:string[] = ['a','b','c'];

const myBoolean:boolean[] = [true,false,true];

//tuplas

let myTuple: [number,string,string[]];

myTuple = [10,'teste',['a','b']];

//object leterals ->{props: value}

const user:{name:string,age:number}={
    name:'Pedro',
    age:10
}

// valor any

let a:any = 0;

//union type

let myUnion:string | number;

myUnion=100;

type myId = number | string;

let mys:myId = 100;

let mys2:myId ='marcos';

//enum
enum Size{
    P = "pequeno",
    M = "medio",
    L = "grande",
    XL = "xLarge"
 }

 const camisa= {
    name:'Comisa v',
    size:Size.XL
 }

 //literal types    

let teste:'teste'| null;

teste= 'teste';
teste= null;


//funcoes

function sum(a:number,b:number){
    return a*b;

}
console.log(sum(2,20));

function sayHelloName(name:string):string{
    return `Hello ${name}`;
}

console.log(sayHelloName('Marcos'));

function logger(msg:string):void{
    console.log(msg);
}
logger('qualquer coisa');

function greeting(name:string,great:string){
    if(great){
        console.log(`Hello ${name} ${great}`);
        return;
    }else{
        console.log(`Hello ${name}`);
    }
}

greeting('Marcos','11');

//interface

interface MathFuctionParms{
    num1:number,
    num2:number
}

function sumMath(num:MathFuctionParms){
    return num.num1+num.num2;
}

console.log(sumMath({num1:10,num2:20}));

function multiplyNumber(nums:MathFuctionParms) {
    return nums.num1*nums.num2
}

console.log(multiplyNumber({num1:10,num2:20}));

const someNumber:MathFuctionParms={
    num1:10,
    num2:30
}
console.log(multiplyNumber(someNumber));


//narrowing
//chegagem de tipos

function doSomething(info: number|boolean){
    if(typeof info==="number"){
        console.log(`o número é ${info}`);
        return
    }
    console.log('não foi passado um número')
}

doSomething(10);
doSomething(true);


//generics

function showArrayItems<T>(arr:T[]){
    arr.forEach((item)=>{
        console.log(`item${arr.length}:${item}`);
    });
}

const a1 = [1,2,3,5];
const a2 = ['eoqe','due certo','xx4']

showArrayItems(a1);
showArrayItems(a2);

//classes

class Person{
    name
    age
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    showUserNamer(){
        console.log(this.name);
    }
    showUserAge(canShow:boolean){
        if(canShow){
            console.log(`a idade do usuario é ${this.age}`);
            return
        }else{
            console.log('não habilitado')
        }
    }
}

const alexandre = new Person("alexandre",24);

alexandre.showUserNamer();
alexandre.showUserAge(false);


//interface em classes

interface IVehicles{
    brand:string,
    showBrand():void;
}

class Car implements IVehicles{
   brand
   whells
   constructor(brand: string, whells:number){
    this.brand = brand;
    this.whells = whells;
   }
   showBrand(){
    console.log(`a marca do carro é ${this.brand}`);
   }
}

const fusca = new Car('vw',4);
fusca.showBrand()

//heranca

class SuperCar extends Car{
    engine
    constructor(brand: string, whells:number, engie:number){
        super(brand, whells);
        this.engine = engie;
    }
    showBrand(){
        super.showBrand();
        console.log(`a força do carro é ${this.engine}`);
    }
}

const a4 = new SuperCar("audi",4,2.0);

console.log(a4);
a4.showBrand();

//decorators
function BaseParameters(){
    return function <T extends{new(...args:any[]):{}}>(constructor:T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        };
    };
};
@BaseParameters()
class Pessoa{
    name;
    constructor(name: string){
        this.name = name;
    }

}
const sam = new Pessoa("sam");

console.log(sam)a
