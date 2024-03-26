function getSearchProducts<T>(products:T[]):T{
    const myIndex=2;
    return products[myIndex];
}

const getSearchProds = <T,>(products:T[]):boolean =>{
    if(products[5])
    {
        return true 
    }
    return false;
} 