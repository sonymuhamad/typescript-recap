export interface Animal extends LivingCreature{
    id :number;
    name:string;
    age?:number | null;
    sounds : ()=>string;
}

export interface LivingCreature{ 
    id :number;
    born?:Date;
}

export type Banana = Omit<Animal,"age">

export type Dog = Animal & Banana

export interface Cat{
    id :number;
    name:string;
    ():void
}

export type PackOfDogs = {
    leader: Dog
    packs : Array<Dog>
    packs2: Dog[]
}