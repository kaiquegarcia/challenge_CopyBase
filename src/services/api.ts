import axios from "axios";
import { APIEvolutionChain, APIEvolutionChainItem, APIPokemon, APIPokemonStat, APIPokemonType } from "../utils/api-responses-interface";
import { IPokemon, IPokemonStat } from "../utils/pokemon-interface";

const baseURL = "https://pokeapi.co/api/v2";
const api = axios.create({
  baseURL,
});

const parsePokemonStats = (statsFromAPI: APIPokemonStat[]): IPokemonStat[] => statsFromAPI.map((statsFromAPI: any): IPokemonStat => {
    return {
        name: statsFromAPI.stat.name,
        value: statsFromAPI.base_stat,
    };
});

const parsePokemonTypes = (typesFromAPI: APIPokemonType[]): string[] => typesFromAPI.map((typeFromAPI: any) => {
    return typeFromAPI.type.name;
});

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

const getEvolutionListOf = function(pokemon: IPokemon, evolvesTo: APIEvolutionChainItem[] | undefined): APIEvolutionChainItem[] | undefined {
    if (!evolvesTo) {
        return [];
    }

    for(let index in evolvesTo) {
        let ev = evolvesTo[index];
        if (ev.species.name === pokemon.name) {
            return ev.evolves_to;
        }

        let innerList = getEvolutionListOf(pokemon, ev.evolves_to);
        if (innerList) {
            return innerList;
        }
    }

    return [];
}
  
const getEvolutionsOf = function(pokemon: IPokemon): Promise<IPokemon[]> {
    return new Promise((resolve, reject) => {
        api.get(`/pokemon-species/${pokemon.id}`).then(
            (response) => {
                if (response.status !== 200) {
                    reject('could not find pokemon specie');
                    return;
                }

                const evolutionChainUrl = response.data.evolution_chain.url.replace(baseURL, "");
                api.get(evolutionChainUrl).then(
                    (response) => {
                        if (response.status !== 200) {
                            reject('could not find evolution chain');
                            return;
                        }
        
                        const data: APIEvolutionChain = response.data;
                        let evolutionPromises: Promise<IPokemon>[] = [];
                        let evolvesTo: APIEvolutionChainItem[] | undefined = [];

                        if (data.chain.species.name === pokemon.name) {
                            evolvesTo = data.chain.evolves_to;
                        } else {
                            evolvesTo = getEvolutionListOf(pokemon, data.chain?.evolves_to);
                        }
        
                        if (evolvesTo && evolvesTo.length) {
                            evolvesTo.forEach((ev) => {
                                evolutionPromises.push(decodeEvolution(ev));
                            })
                        }
        
                        Promise.all(evolutionPromises).then(resolve, reject)
                    },
                    reject
                );
            },
            reject
        );
    });
};
  
export default {
    getPokemonByNameOrId,
};