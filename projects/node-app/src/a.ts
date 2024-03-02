type Employee={
    name:string;
    startDate:Date;
}
interface Manager{
    name:string,
    department:string
};
type TechLead= Employee & Manager;
const t:TechLead={
    name:"aditya",
    startDate: new Date(),
    department:"Developer"
}
console.log(t.name)