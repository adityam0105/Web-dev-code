type cardNumber= {
    cardNumber:string
}

type cardDate= {
    cardDate:string
}

type cardDetails= cardNumber & cardDate & {
    cvv:number
}

function createCardDetails(card:cardDetails):cardDetails{
    return{cardNumber:card.cardNumber,
    cardDate:card.cardDate,
    cvv:card.cvv
}
}

console.log(createCardDetails({cardNumber:"123",cardDate:"5/6/30",cvv:453}))