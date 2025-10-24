import type {Dog, PackOfDogs,Banana} from "./dto/dog.ts"
import { twoSumOptimized } from "./problems/two-sums.js"

// const dog : Dog= {
// id:1,
// name:"dog name",
// sounds:()=>{
//     return "whooops"
// }
// }

// console.log(`Hey this is dog with ID ${dog.id} and it's name is ${dog.name}`)
// console.log(render("BLABLA"))

// function render(document:any):string{
//     if (typeof document == "number"){
//         return document.toString()
//     }

//     return document
// }

// const packsOfDogs :PackOfDogs = {
//     leader: dog,
//     packs: [dog],
//     packs2:[dog,dog,dog]
// }

// for(const pack of packsOfDogs.packs){
//     const {id,...rest} = pack
//     console.log(rest.sounds())
//     console.log(id,rest)
// }

// console.log(...packsOfDogs.packs2)

console.log(twoSumOptimized([3,2,4],6))