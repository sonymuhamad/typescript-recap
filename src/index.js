"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
const dog = {
    id: 1,
    name: "dog name",
    sounds: () => {
        return "whooops";
    }
};
console.log(`Hey this is dog with ID ${dog.id} and it's name is ${dog.name}`);
console.log(render("BLABLA"));
function render(document) {
    if (typeof document == "number") {
        return document.toString();
    }
    return document;
}
const packsOfDogs = {
    leader: dog,
    packs: [dog],
    packs2: [dog, dog, dog]
};
for (const pack of packsOfDogs.packs) {
    const { id, ...rest } = pack;
    console.log(rest.sounds());
    console.log(id, rest);
}
console.log(...packsOfDogs.packs2);
//# sourceMappingURL=index.js.map