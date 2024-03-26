//enums

enum seatChoice{
    one= "one",
    two="two",
    three="three",
    four="four"
}

enum seat_choice{
    one,two,three,four
}

const enum SeatChoice{ //better in case of IIFE generation
    one = "o",
    two=2,
    three,
    four=1
}
const mySeat= seat_choice.three
console.log(mySeat)