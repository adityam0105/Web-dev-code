
class Calculator {
  constructor(){
    this.result =0;
  }
  add(num){
    if(typeof num === "number"){
      this.result+=number;
    }
    else{
      throw new Error("Invalid Number")
    }
  }
  subtract(num){
    if(typeof num === "number"){
      this.result-=number;
    }
    else{
      throw new Error("Invalid Number")
    }
  }
  multiply(num){
    if(typeof num === "number"){
      this.result*=number;
    }
    else{
      throw new Error("Invalid Number")
    }
  }
  divide(num){
    if(typeof num === "number" && num !== 0){
      this.result/=number;
    }
    else{
      throw new Error("Invalid Number")
    }
  }
  clear(){
    this.result =0;
  }
  getResult(){
    return this.result;
  }
  calculate(expression){
    this.result = eval(expression.replace(/\s+/g," "))
    if(this.result === Infinity){
      throw new Error("Infinity")
    }
    return this.result;
  }
}
