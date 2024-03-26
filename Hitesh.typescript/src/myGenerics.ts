function myGen<Type>(val:Type):Type{
    return val
}

function myGen2<Type>(val:Type):Type{
    return val
}
interface Car{
    brand:string
    model:number
}

const newCar=myGen2<Car>({brand:"audi",model:5})
console.log(newCar);