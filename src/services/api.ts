import axios from "axios";
import { APIEvolutionChain, APIEvolutionChainItem, APIPokemon, APIPokemonStat, APIPokemonType } from "../utils/api-responses-interface";
import { IPokemon, IPokemonStat } from "../utils/pokemon-interface";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

const parsePokemonStats = (statsFromAPI: APIPokemonStat[]): IPokemonStat[] => statsFromAPI.filter((statsFromAPI: any): IPokemonStat => {
    return {
        name: statsFromAPI.stat.name,
        value: statsFromAPI.base_stat,
    };
}) as any[];

const parsePokemonTypes = (typesFromAPI: APIPokemonType[]): string[] => typesFromAPI.filter((typeFromAPI: any) => {
    return typeFromAPI.type.name;
}) as any[];

export const getPokemonByNameOrId = function(nameOrId: number | string, getEvolutions: boolean = true): Promise<IPokemon> {
    return new Promise((resolve, reject) => {
        if (!nameOrId) {
            reject("Please fulfill the input");
            return;
        }

        api.get(`/pokemon/${nameOrId}`).then(
            (response) => {
                if (response.status !== 200) {
                    reject('could not find Pokemon');
                    return;
                }

                let data: APIPokemon = response.data;
                let pokemon: IPokemon = {
                    id: data.id,
                    name: data.name,
                    imgUrl: data.sprites.front_default,
                    stats: parsePokemonStats(data.stats),
                    types: parsePokemonTypes(data.types),
                    evolutions: [],
                }

                if(!getEvolutions) {
                    resolve(pokemon);
                    return;
                }

                getEvolutionsOf(pokemon).then(
                    (evolutions: IPokemon[]) => {
                        pokemon.evolutions = evolutions;
                        resolve(pokemon);
                    },
                    reject
                );
            },
            reject
        )
    });
};

const decodeEvolution = function(item: APIEvolutionChainItem): Promise<IPokemon> {
    return new Promise((resolve, reject) => {
        getPokemonByNameOrId(item.species.name, false).then(
            (pokemon: IPokemon) => {
                let evolutionPromises: Promise<IPokemon>[] = [];
                if (item.evolves_to?.length) {
                    item.evolves_to.forEach((ev) => {
                        evolutionPromises.push(decodeEvolution(ev));
                    });
                }

                Promise.all(evolutionPromises).then(
                    (evolutions: IPokemon[]) => {
                        pokemon.evolutions = evolutions;
                        resolve(pokemon);
                    },
                    (err) => {
                        reject(err);
                    }
                );
            },
            reject
        );
    });
}
  
const getEvolutionsOf = function(pokemon: IPokemon): Promise<IPokemon[]> {
    return new Promise((resolve, reject) => {
        console.log(pokemon);
        api.get(`/evolution-chain/${pokemon.id}`).then(
            (response) => {
                if (response.status !== 200) {
                    reject('could not find evolution chain');
                    return;
                }

                const data: APIEvolutionChain = response.data;
                let evolutionPromises: Promise<IPokemon>[] = [];

                if (data.chain?.evolves_to?.length) {
                    data.chain.evolves_to.forEach((ev) => {
                        evolutionPromises.push(decodeEvolution(ev));
                    })
                }

                Promise.all(evolutionPromises).then(resolve, reject)
            },
            reject
        )
    });
};
  
export default {
    getPokemonByNameOrId,
};