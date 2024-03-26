const superHeros: string[] =[]
const heroPower: Array<number>= []

superHeros.push("spidy")
superHeros.push("batty")
superHeros.push("donny")
superHeros.push("rudy")

heroPower.push(1000)
heroPower.push(10)
heroPower.push(1)
heroPower.push(69)

for (let i = 0; i < superHeros.length; i++) {
    console.log(`${superHeros[i]} has ${heroPower[i]} power`)
}