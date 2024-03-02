import { atom, selector } from "recoil"

export const countAtom=atom({
    key:"countAtom", // never have same keys in any object
    default:0
})
export const evenSelector=selector({ //revise
    key:"evenSelector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2==0
    }
});