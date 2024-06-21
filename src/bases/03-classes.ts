import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
    // public id : number;
    // public name : string;

    // constructor(id: number, name:string) {
    //     this.id = id;
    //     this.name = name;
    // }

    
    public get imageUrl() : string {
        return `https://pokemon.com/${ this.id }`;
    }
    

    constructor(
        public readonly id: number,
        public name: string,
        //public imageUrl?: string,
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!`)
        this.speak()
    }

    private speak() {
        console.log(`${ this.name }`)
    }

    async getMoves(): Promise<Move[]> {
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }
}

export const charmander = new Pokemon( 4, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Meow';
//console.log(charmander);

//charmander.scream();
//charmander.speak();

// console.log(charmander.getMoves());
charmander.getMoves();