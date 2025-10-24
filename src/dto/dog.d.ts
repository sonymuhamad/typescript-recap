export interface Animal extends LivingCreature {
    id: number;
    name: string;
    age?: number | null;
    sounds: () => string;
}
export interface LivingCreature {
    id: number;
    born?: Date;
}
export type Dog = Animal;
export type Banana = Omit<Animal, "age">;
export interface Cat {
    id: number;
    name: string;
    (): void;
}
export type PackOfDogs = {
    leader: Dog;
    packs: Array<Dog>;
    packs2: Dog[];
};
//# sourceMappingURL=dog.d.ts.map