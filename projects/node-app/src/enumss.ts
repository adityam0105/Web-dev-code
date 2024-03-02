enum Direction{
    Up="u",
    Down="d",
    Left="l",
    Right="r"
}

function DoSomething(keyPassed:Direction):boolean{
    if(keyPassed==Direction.Up){
        return true;
    }
    else{
        return false;
    }
}
console.log(DoSomething(Direction.Up));
console.log(DoSomething(Direction.Right));
