class calculatorApp {
    constructor(number1,number2){
        this.result=0; //result of the math operation
        this.number1=number1;
        this.number2=number2;
    }
    add(){
        return this.result = this.number1 + this.number2;
    }
    subtract(){
        return this.result = this.number1 - this.number2;
    }
    multiply(){
        return this.result = this.number1 * this.number2;
    }
    divide(){
        return this.result = this.number1 / this.number2;
    }
    toString(){
        console.log(`The result is ${this.result}`)
    }
}
let calculator = new calculatorApp(8,4);

//trying it out
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
calculator.toString();

//Dit kan ook korter

// class Calc{
//     constructor(number1,number2,operator){
//         this.result=0;
//         this.number1=number1;
//         this.number2=number2;
//         this.operator=operator
//     }

//     getResult(){
//         switch(this.operator){
//             case '+':
//             this.result=this.number1 + this.number2;
//             break;
//             case '-':
//                 this.result=this.number1 - this.number2;
//                 break;
//             case '*':
//                  this.result=this.number1 * this.number2;
//                 break;
//             case '/':
//                 this.result=this.number1 / this.number2;
//                 break;
//             default:
//                 console.log("Invalid operator");
//         }
//     }

//     toString(){
//         console.log(`${this.number1} ${this.operator} ${this.number2} = ${this.result}`)
//     }
// }

// let app = new Calc(20,10,'+');
// app.getResult();
// app.toString();

// let app2 = new Calc(24,5,'*')

// app2.getResult();
// app2.toString();

// let app3 = new Calc(25,5,'/')

// app3.getResult();
// app3.toString();


//hoeft niet per se telkens een nieuw object te zijn
class Calc{
    constructor(number1,number2,operator){
        this.result=0;
        this.number1=number1;
        this.number2=number2;
        this.operator=operator
    }

    getResult(operator){
        this.operator=operator; //dees is nodig voor de toString
        switch(operator){
            case '+':
            this.result=this.number1 + this.number2;
            break;
            case '-':
                this.result=this.number1 - this.number2;
                break;
            case '*':
                 this.result=this.number1 * this.number2;
                break;
            case '/':
                this.result=this.number1 / this.number2;
                break;
            default:
                console.log("Invalid operator");
        }
    }

    toString(){
        console.log(`${this.number1} ${this.operator} ${this.number2} = ${this.result}`)
    }
}
let app = new Calc(10,5);
app.getResult('*');
app.getResult('/');
app.getResult('-');
app.getResult('+')
app.toString();


