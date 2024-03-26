interface OtherUser {
    username: string,
    password :string
}

interface Administrator extends OtherUser{
    pin:number
    techStack: "php"|"mern"|"python"|"java"
}

const ad:Administrator={
    username:"aditya0105",
    password:"123",
    pin: 12398,
    techStack:"mern"
}

console.log(ad)