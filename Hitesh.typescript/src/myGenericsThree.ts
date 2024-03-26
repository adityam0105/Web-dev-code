interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string
    author:string
    subject:string
}

class sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}
let buyer= new sellable<number>
buyer.cart= [1,10,20,30,40,50];
console.log(buyer.addToCart(buyer.cart.push(66)))