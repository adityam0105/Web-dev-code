import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily=atomFamily({
  key:"todosAtomFamily",
  default: id=>{
    return TODOS.find(z=>z.id==id)
  }
});